import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'client-dist')

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  throw new Error('client-dist is missing; run the client build first')
}

const generatedNames = fs.readdirSync(dist)
for (const name of generatedNames) {
  const source = path.join(dist, name)
  const target = path.join(root, name)
  if (name === 'assets' && fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true })
  if (fs.statSync(source).isDirectory()) {
    fs.cpSync(source, target, { recursive: true, force: true })
  } else {
    fs.copyFileSync(source, target)
  }
}

console.log('Synced the validated build to the GitHub Pages root')
