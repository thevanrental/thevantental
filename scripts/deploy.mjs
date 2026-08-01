#!/usr/bin/env node
// Deploy client-dist + images to GitHub Pages via Git Data API
// Uses @replit/connectors-sdk for authenticated GitHub access

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

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
    if (!res.ok) throw new Error(`GitHub ${method} ${endpoint} → ${res.status}: ${txt.slice(0,200)}`);
    return JSON.parse(txt);
  }

  const owner = 'thevanrental';
  const repo = 'thevantental';
  const branch = 'main';

  // Test auth
  const user = await gh('/user');
  console.log('Authenticated as:', user.login);

  const ref = await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`);
  const baseCommitSha = ref.object.sha;
  console.log('base commit:', baseCommitSha.slice(0, 10));

  const baseCommit = await gh(`/repos/${owner}/${repo}/git/commits/${baseCommitSha}`);
  const baseTreeSha = baseCommit.tree.sha;

  function walk(dir, base) {
    const items = fs.readdirSync(dir);
    let files = [];
    for (const item of items) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) files = files.concat(walk(full, base));
      else files.push({ full, repoPath: path.relative(base, full) });
    }
    return files;
  }

  const distDir = path.join(root, 'client-dist');
  const distFiles = walk(distDir, distDir);
  const imageFiles = walk(path.join(root, 'images'), root);
  const allFiles = [...distFiles, ...imageFiles];
  console.log(`Files to upload: ${allFiles.length}`);

  const treeItems = [];
  let done = 0;
  for (const file of allFiles) {
    const isBinary = /\.(png|jpg|jpeg|gif|ico|woff2?|ttf|eot)$/i.test(file.full);
    const content = fs.readFileSync(file.full, isBinary ? 'base64' : 'utf-8');
    const blob = await gh(`/repos/${owner}/${repo}/git/blobs`, 'POST', {
      content, encoding: isBinary ? 'base64' : 'utf-8',
    });
    treeItems.push({ path: file.repoPath, mode: '100644', type: 'blob', sha: blob.sha });
    done++;
    if (done % 10 === 0) console.log(`  ${done}/${allFiles.length} blobs...`);
  }
  console.log(`All ${allFiles.length} blobs done`);

  const uploadedPaths = new Set(allFiles.map(file => file.repoPath));
  const existingTree = await gh(`/repos/${owner}/${repo}/git/trees/${baseTreeSha}?recursive=1`);
  for (const entry of existingTree.tree || []) {
    if (entry.type === 'blob' && entry.path.startsWith('assets/') && !uploadedPaths.has(entry.path)) {
      treeItems.push({ path: entry.path, mode: '100644', type: 'blob', sha: null });
    }
  }

  const newTree = await gh(`/repos/${owner}/${repo}/git/trees`, 'POST', { base_tree: baseTreeSha, tree: treeItems });
  console.log('New tree:', newTree.sha.slice(0, 10));

  const newCommit = await gh(`/repos/${owner}/${repo}/git/commits`, 'POST', {
    message: 'Add BMW 5 Series to SUVs page',
    tree: newTree.sha,
    parents: [baseCommitSha],
  });
  console.log('New commit:', newCommit.sha.slice(0, 10));

  const updated = await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, 'PATCH', { sha: newCommit.sha });
  console.log('Deployed:', updated.object?.sha?.slice(0, 10));
}

main().catch(e => { console.error(e.message); process.exit(1); });
