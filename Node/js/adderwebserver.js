/**
 * 
 */

const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod");
console.log("server started.....");
http.createServer(function (req, res) {
  const endpointURL = url.parse(req.url, true);
  const filename = "./" + endpointURL.pathname;

  if (endpointURL.pathname == "/add.js") {
    addmod.add(req, res, endpointURL.query);
  }
  else {
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("<h2 style='color:red'>404 Not Found</h2>");
      }
      res.writeHead(200);  // Content-Type not included
      res.write(data);
      return res.end();
    });
  }

}).listen(8080);
console.log("Server started . Listening on port 8080");