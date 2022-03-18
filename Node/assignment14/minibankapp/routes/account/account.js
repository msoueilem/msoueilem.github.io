/**
 * account.js
 */
"use strict"

const express = require("express")
const accountRouter = express.Router()
const path = require("path")
const accountController = require("../../controller/accountController")

// const Account = require("../../model/account") - this does not require anymore as DAO and controller work with db

//Define account page routes
 accountRouter.get("/account", async (req, res, next) => {
    console.log(`Presenting Account Page`)    
    //res.sendFile(path.join(__dirname, "../../views", "account")) - this does not require as index.js app.set view engine
    const accounts = await accountController.getAccounts(req, res)
    console.log(accounts)
    res.locals = {accounts : accounts};
    res.render("account")//:8080/account -> account.pug - auto know by view engine
})

//cannot do post & redirect - as long as redirecting, it will lost data added beforehand
accountRouter.post("/account", async (req, res, next) => {
    console.log(`Account Form Post`)
    const result = await accountController.addNewAccount(req, res)   
    res.redirect(303, "/account")
    
})

module.exports = accountRouter