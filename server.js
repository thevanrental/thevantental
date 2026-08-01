const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const HOST = '0.0.0.0';

const DIST_DIR = path.join(__dirname, 'client-dist');
const ROOT_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webp': 'image/webp',
};

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Serve /images/* from the root images folder
  if (urlPath.startsWith('/images/')) {
    const imgPath = path.join(ROOT_DIR, urlPath);
    if (fs.existsSync(imgPath) && !fs.statSync(imgPath).isDirectory()) {
      return serveFile(imgPath, res);
    }
  }

  // Serve /favicon.ico from root
  if (urlPath === '/favicon.ico') {
    const favPath = path.join(ROOT_DIR, 'favicon.ico');
    if (fs.existsSync(favPath)) return serveFile(favPath, res);
  }

  // Serve everything else from client-dist
  let filePath = path.join(DIST_DIR, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // SPA fallback — serve index.html for all unmatched routes
  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  serveFile(filePath, res);
});

server.listen(PORT, HOST, () => {
  console.log(`The Van Rental running at http://${HOST}:${PORT}`);
});
