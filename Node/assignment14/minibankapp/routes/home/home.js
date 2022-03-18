/**
 * home.js
 */
 "use strict"

 const express = require("express")
 const homeRouter = express.Router()
 const path = require("path")
 
 //Define home page routes
 homeRouter.get("/", (req, res, next) => {
     console.log(`Presenting Home Page`)
     res.sendFile(path.join(__dirname, "../../views", "index.html"))
 })

 homeRouter.get("/home", (req, res, next) => {
    console.log(`Presenting Home Page`)
    res.sendFile(path.join(__dirname, "../../views", "index.html"))
})
 
 module.exports = homeRouter