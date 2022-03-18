/**
 * index.js
 * 
 * A demo express webapp to show use of middleware
 */
"use strict";

const express = require("express");
const app = express();
// Define middlewares
app.use((req, res, next) => {
    console.log(`This middleware is always run`);
    next();
});
app.use("/add-product", (req, res, next) => {
    console.log(`In the add-product middleware`);
    const addProductPageContent = `
        <!doctype html>
        <html lang="en">
        <head>
            <title>Add Product</title>
        </head>
        <body>
            <h1>Here is the Add Product page</h1>
            <section>
                <h2>Products Information will go here</h2>
            </section>
            <footer>
                <a href="/">Go back to the homepage</a>
            </footer>
        </body>
        </html>
    `;
    res.send(addProductPageContent);
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
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});