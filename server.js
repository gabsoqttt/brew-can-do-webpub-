const http = require("http"), fs = require("fs"), path = require("path");

const types = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml",
};
// Optional extra GET endpoints (your pages don't need these)
const api = {
  "/api/services": "data/services.json",
  "/api/customers": "data/customers.json",
};
const root = process.cwd();

http.createServer((req, res) => {
  if (req.method !== "GET") { res.writeHead(405); return res.end("GET only"); }
  const url = decodeURIComponent(req.url.split("?")[0]);
  const file = api[url] || (url === "/" ? "index.html" : "." + url);
  const full = path.resolve(root, file);
  if (!full.startsWith(root)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": types[path.extname(full)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(3000, () => console.log("Running at http://localhost:3000"));