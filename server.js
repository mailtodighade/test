const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('hello world');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
