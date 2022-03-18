/**
 * index.js
 * 
 * A demo express webapp to show use of middleware
 * for URL Routing
 */
 "use strict";

 const express = require("express");
 const path = require("path");

 const app = express();
 // Define middlewares

 // setup the express HttpRequest body parser middleware
 app.use(express.urlencoded({ extended: false }));
//  app.use(express.json());

 app.use((req, res, next) => {
     console.log(`This middleware is always run`);
     next();
 });
 app.get("/", (req, res, next) => {
    console.log(`In the homepage http-get route's middleware`);
    res.sendFile(path.join(__dirname, "views", "index.html"));
 });
 app.get("/product-form", (req, res, next) => {
     console.log(`In the product-form http-get route's middleware`);
     res.sendFile(path.join(__dirname, "views", "product-form.html"));
 });
 app.post("/add-product", (req, res, next) => {
    console.log(`In the add-product http-post route's middleware`);
    console.log(`Adding New Product data:`);
    console.log(`Product No: ${req.body.productNo}`);
    console.log(`Product Name: ${req.body.productName}`);
    console.log(`Unit Price: ${req.body.unitPrice}`);
    const queryString = `productNo=${req.body.productNo}&productName=${req.body.productName}&unitPrice=${req.body.unitPrice}`;
    const redirectUrl = `/confirm-product-added?${queryString}`;
    res.redirect(303, redirectUrl);
 });
 app.get("/confirm-product-added", (req, res, next) => {
    console.log(`In the confirm-product-added middleware`);
    const productDataConfirmationPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Products Mgmt WebApp - an Express.JS Routing Demo</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                }
                header {
                    display: flex;
                    width: 100%;
                    height: 10vh;
                    align-items: center;
                    background-color: blue;
                }
                nav {
                    margin: 0em;
                }
                nav h1 {
                    color:aliceblue;
                }
                a#hyplnkAppBranding {
                    color: #efefef;
                    text-decoration: none;
                    font-size: 1.5em;
                }
                ul#ulNavItems > li {
                    display: inline;
                    list-style-type: none;
                }
                a.hyplnkNavItem {
                    color: #efefef;
                    text-decoration: none;
                    font-size: large;
                    border-left: 1px solid #efefef;
                    margin-left: 1em;
                    padding-left: 1em;
                }
                div#divHeaderRightContent {
                    margin-right: 1em; 
                    border: 0px solid #efefef; 
                    width: 100%; 
                    display: inline; 
                    color: #efefef;
                }    
                div.form-control-row {
                    margin-bottom: .5em;
                }
            </style>
        </head>
        <body>
            <header>
                <nav>
                    <ul id="ulNavItems">
                        <li>
                            <a id="hyplnkAppBranding" href="/">
                                My Products Mgmt WebApp - an Express.JS Routing Demo
                            </a>
                        </li>
                    </ul>
                </nav>
                <div id="divHeaderRightContent">
                    <span style="float: right;">Welcome, Guest</span>
                </div>        
            </header>
            <main style="margin-left: 2em;margin-right: 2em;">
                <h2>Your New Product data has been added</h2>
                <section>
                <p>Product No: ${req.query.productNo}</p>
                <p>Product Name: ${req.query.productName}</p>
                <p>Unit Price: ${req.query.unitPrice}</p>
                    <p>
                        <a href="/product-form">Add another Product</a> | 
                        <a href="/">Go to Home page</a>
                    </p>
                </section>
            </main>
        </body>
        </html>
    `;
    res.send(productDataConfirmationPageContent);
    res.end();
    // res.sendFile(path.join(__dirname, "views", "confirm-product-added.html"));
 });

 // Put the Error 404 middleware last
 app.use((req, res, next) => {
    console.log(`Responding with a 404 Error page`);
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
 });

 const port = 3000;
 app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });