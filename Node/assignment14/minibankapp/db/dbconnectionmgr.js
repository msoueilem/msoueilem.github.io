/**
 * dbconnnectionmgr.js
 * Create DB connection in pool
 */

 "use strict"

 const mysql = require("mysql2")
 const dbConfig = require("./dbconfig")

 const dbConnnectionMgr = (function(dbConfig){
     /**
     * Makes and returns a Database Connection pool using the given config
     */
    const getConnection = function(){
        return mysql.createPool(dbConfig)
    }
    return{
        getConnection: getConnection
    }
 })(dbConfig)

 module.exports = dbConnnectionMgr