const http = require('http');

const server = http.createServer(function (req, res) {
  // Check the URL of the current request
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is home Page :Quang.</p></body></html>');
    res.end();
  } else if (req.url === '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page :Quang.</p></body></html>');
    res.end();
  } else if (req.url === '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is admin Page :Quang.</p></body></html>');
    res.end();
  } else if (req.url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: "Hello World JSON" }));
    res.end();
  } else {
    res.end('Invalid Request! :Quang');
  }
});

server.listen(8080); // Listen for any incoming requests
console.log('Node.js web server at port 8080 is running Quang...');