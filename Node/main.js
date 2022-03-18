/**
 * 
 * main.js
 * @msoueilem
 * @since 2022-03-11
 */

// console.log("starting HTTPServer for Hello world.....");

// const http = require("http");

// //Create and start and HTTPServer
// http.createServer(
//     function(req,res){
//         res.writeHead(200,{
//             "Content-Type": "text/html"
//         });
//         res.end();

//     }
// ).listen(8080);

// const http = require('http');
// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.json());
// app.use(express.static("express"));
// // default URL for website
// app.use('/', function(req,res){
//     res.sendFile(path.join(__dirname+'../pages/minibank.html'));
//     //__dirname : It will resolve to your project folder.
//   });
// const server = http.createServer(app);
// const port = 3000;
// server.listen(port);
// console.debug('Server listening on port ' + port);