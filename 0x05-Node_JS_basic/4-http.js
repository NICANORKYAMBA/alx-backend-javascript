const http = require('http');

// Create an HTTP Server
const app = http.createServer((req, res) => {
  // Set the response HTTP header to indicate plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send message as the response
  res.end('Hello Holberton School!');
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
