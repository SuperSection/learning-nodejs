const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else if (req.url === "/download") {
    res.end("Here is our download page for you");
  } else {
    res.end("404: Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
