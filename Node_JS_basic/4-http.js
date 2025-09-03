const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello Holberton School!');
});

if (require.main === module) {
  app.listen(1245);
}

module.exports = app;
