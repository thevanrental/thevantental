#!/usr/bin/env node
// Push full source code to GitHub (origin/main) via Git Data API
// Combines existing deployed dist with current source files

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Directories/files to include in the source push
const INCLUDE_DIRS = ['client/src', 'client/public', 'scripts', 'server'];
const INCLUDE_FILES = [
  'client/index.html',
  'client/package.json',
  'client/package-lock.json',
  'client/tsconfig.json',
  'client/tsconfig.node.json',
  'client/vite.config.ts',
  'client/tailwind.config.js',
  'client/postcss.config.js',
  'package.json',
  'package-lock.json',
  'server.js',
  '.gitignore',
  'replit.md',
];

// Extensions treated as binary
const BINARY_EXT = /\.(png|jpg|jpeg|gif|ico|woff2?|ttf|eot|webp|svg|pdf)$/i;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const items = fs.readdirSync(dir);
  let files = [];
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  }
  return files;
}

async function main() {
  const { ReplitConnectors } = await import('@replit/connectors-sdk');
  const connectors = new ReplitConnectors();

  async function gh(endpoint, method = 'GET', body = undefined) {
    const res = await connectors.proxy('github', endpoint, {
      method,
      headers: { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      body: body ? JSON.stringify(body) : undefined,
    });
    const txt = await res.text();
    if (!res.ok) throw new Error(`GitHub ${method} ${endpoint} → ${res.status}: ${txt.slice(0, 300)}`);
    return JSON.parse(txt);
  }

  const owner = 'thevanrental';
  const repo = 'thevantental';
  const branch = 'main';

  const user = await gh('/user');
  console.log('Authenticated as:', user.login);

  const ref = await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`);
  const baseCommitSha = ref.object.sha;
  console.log('Remote commit:', baseCommitSha.slice(0, 10));

  const baseCommit = await gh(`/repos/${owner}/${repo}/git/commits/${baseCommitSha}`);
  const baseTreeSha = baseCommit.tree.sha;

  // Collect all source files
  const allFiles = [];
  for (const dir of INCLUDE_DIRS) {
    const fullDir = path.join(root, dir);
    for (const full of walk(fullDir)) {
      allFiles.push({ full, repoPath: path.relative(root, full) });
    }
  }
  for (const f of INCLUDE_FILES) {
    const full = path.join(root, f);
    if (fs.existsSync(full)) allFiles.push({ full, repoPath: f });
  }

  console.log(`Source files to push: ${allFiles.length}`);

  const treeItems = [];
  let done = 0;
  for (const file of allFiles) {
    const isBinary = BINARY_EXT.test(file.full);
    const content = fs.readFileSync(file.full, isBinary ? 'base64' : 'utf-8');
    const blob = await gh(`/repos/${owner}/${repo}/git/blobs`, 'POST', {
      content, encoding: isBinary ? 'base64' : 'utf-8',
    });
    treeItems.push({ path: file.repoPath, mode: '100644', type: 'blob', sha: blob.sha });
    done++;
    if (done % 20 === 0) console.log(`  ${done}/${allFiles.length} blobs...`);
  }
  console.log(`All ${allFiles.length} blobs done`);

  const newTree = await gh(`/repos/${owner}/${repo}/git/trees`, 'POST', {
    base_tree: baseTreeSha,
    tree: treeItems,
  });
  console.log('New tree:', newTree.sha.slice(0, 10));

  const newCommit = await gh(`/repos/${owner}/${repo}/git/commits`, 'POST', {
    message: 'Sync full source code — extras section, Sprinter on Vans page, Partners section',
    tree: newTree.sha,
    parents: [baseCommitSha],
  });
  console.log('New commit:', newCommit.sha.slice(0, 10));

  const updated = await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, 'PATCH', { sha: newCommit.sha });
  console.log('Pushed:', updated.object?.sha?.slice(0, 10));
}

main().catch(e => { console.error(e.message); process.exit(1); });
