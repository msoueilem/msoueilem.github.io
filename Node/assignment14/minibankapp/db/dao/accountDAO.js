/**
 * accountDAO.js
 * Data access Object
 */
"use strict"
const dbConnnectionMgr= require("../dbconnectionmgr")

const accountDAO = (function(){
    
    const getAccounts = async function(){
        const qryStrGetAccounts = "SELECT * FROM `minibank-db`.account;"
        try {
            const dbConnection = dbConnnectionMgr.getConnection()
            const [accounts] = await dbConnection.promise().query(qryStrGetAccounts)
            return accounts;
        } catch (error) {
            console.log(`DB Access Error: ${error}`)
            throw error
        }
    }
    const saveAccount = async function(account) {
        const cmdStrSaveAccount = `insert into account (accountNo, customerName, accountType) values ('${account.accountNo}', '${account.customerName}', '${account.accountType}' )`
        try {
            const dbConnection = dbConnnectionMgr.getConnection()
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount)
            return saveOpResult
        } catch (error) {
            console.log(`DB Access Error: ${error}`)
            throw error
        }
    }

    return{
        getAccounts : getAccounts,
        saveAccount : saveAccount
    }
})();

module.exports = accountDAO