/**
 * 
 * mini bank app
 * @author Soueilem 
 * @since today
 */
"use strict";

import { Account } from "../JS/model/account.js";

console.log("Hello mini bank app");

// Avoid polluting the global environment 
// Method 1:
// (function() {
//     console.log("Wrapper mini bank app module loader");
//     const formNewAccount = document.getElementById("formNewAccount");
//     formNewAccount.addEventListener("submit", createAccount);
//     function createAccount(){
//         console.log("Account created");
//     }
// })();

// Method 2: using window onload
// window.onload =  function() {
//         console.log("Wrapper mini bank app window loader");
//         const formNewAccount = document.getElementById("formNewAccount");
//         formNewAccount.addEventListener("submit", createAccount);
//         function createAccount(){
//             console.log("Account created");
//         }
//     }

// Method 3: using jQuery
$(document).ready(
    function () {
        console.log("Wrapper mini bank app jQuery loader");

        const accountDataArray = [];


        $("#formNewAccount").submit(function (event) {

            event.preventDefault();

            console.log(event.target);

            const accountNumber = $("#txtAccountNo").val();
            const customerName = $("#txtCustomerName").val();
            const accountType = $("#ddlAccountType").val();

            const accountData = `
            Account Number: ${accountNumber}
            Customer: ${customerName}
            Account Type: ${accountType}`;

            //alert(accountData);

            const newAccount = new Account(accountNumber, customerName, accountType);

            accountDataArray.push(newAccount);
            const len = accountDataArray.length+2;

            createAccount(newAccount, accountDataArray.length+2);

            $("#txtAccountNo").val("");
            $("#txtCustomerName").val("");
            $("#ddlAccountType").val("");
        });

        function createAccount(newAccount, num) {



            const tblAccounts = document.querySelector("#tblAccounts");
            const newRow = tblAccounts.insertRow(-1);
            const newCellRow = newRow.insertCell(0);
            const nextRowId = num;
            const strNewRowId = document.createTextNode(`${nextRowId}.`);
            newCellRow.appendChild(strNewRowId);
            const numberAc = newRow.insertCell(1);
            const numberAcStr = document.createTextNode(`${newAccount.getNumber()}`);
            numberAc.appendChild(numberAcStr);

            const nameAc = newRow.insertCell(2);
            const nameAcStr = document.createTextNode(`${newAccount.getName()}`);
            nameAc.appendChild(nameAcStr);

            const typeAc = newRow.insertCell(3);
            const typeAcStr = document.createTextNode(`${newAccount.getType()}`);
            typeAc.appendChild(typeAcStr);

            console.log("Account Created");
        }

    }
);