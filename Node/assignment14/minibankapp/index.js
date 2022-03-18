/**
 * index.js
 */
"use strict"

const express = require("express")
const path = require("path")
const homeRoutes = require("./routes/home/home")
const accountRoutes = require("./routes/account/account")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));

// setup the express HttpRequest body parser middleware
 app.use(express.urlencoded({ extended: false }));//to use req.body

app.use("", homeRoutes)
app.use("", accountRoutes)

 // Put the Error 404 middleware last
 app.use((req, res, next) => {
    console.log(`Responding with a 404 Error page`);
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
 });

const PORT_NUMBER = 8080;
app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`)
})