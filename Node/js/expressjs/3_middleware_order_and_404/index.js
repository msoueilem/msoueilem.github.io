/**
 * index.js
 * 
 * A demo express webapp to show use of middleware 
 * and the significance of the order in which they are
 * defined/loaded 
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const app = express();
 // Define middlewares
 app.use((req, res, next) => {
     console.log(`This middleware is always run`);
     next();
 });

app.use((req, res, next) => {
    console.log(`Responding with a 404 Error page`);
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
 });
 // Due to the above error 404 middleware, none of the ones below are reachable
 // every HTTP Request will result in the 404 error page response
 app.get("/add-product", (req, res, next) => {
     console.log(`In the add-product middleware`);
     res.sendFile(path.join(__dirname, "views", "add-product.html"));
 });
 app.use("/", (req, res, next) => {
     console.log(`In the homepage middleware`);
     const homePageContent = `
         <!doctype html>
         <html lang="en">
         <head>
             <title>Home</title>
         </head>
         <body>
             <h1>Welcome to my Express webapp 2</h1>
             <section>
                 <h2>Here is the homepage</h2>
                 <a href="/add-product">Go to the Add Product page</a>
             </section>
         </body>
         </html>
     `;
     res.send(homePageContent);
 });
// Put the Error 404 middleware last
//  app.use((req, res, next) => {
//     console.log(`Responding with a 404 Error page`);
//     res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
//  });

 const port = 3000;
 app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });