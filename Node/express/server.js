/**
 * 
 */

const express = require("express");
const app = express();
const port = 3000;
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    const docs = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <script src="Node/main.js"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style type="text/css">
            body {
                display: grid;
                place-content: center;
            }
    
            input[type="text"], input[type="number"], input[type="date"] {
                margin-bottom: 20px;
                padding: 3px;
                width: 50%;
            }
            .buttons{
                float: right;
                padding-top: 5px;
                padding-bottom: 50px;
            
            }
        </style>
        <title>Page</title>
    </head>
    
    <body>
    
        <header>
            <h1>Student registration Form</h1>
        </header>
    
        <form action="http://localhost:8080/add.js">
            <fieldset>
                <legend>Test 3</legend>
                <span>First</span>
                <div> 
                    <input type="number" name="first" step="0.01">
                </div>
                <span>Second</span>
                <div> 
                    <input type="number" name="second" step="0.01">
                </div>
            </fieldset>
            <div class="buttons">
                <input type="reset" value="Reset">
                <input type="submit" value="Submit">
            </div>
        </form>
    </body></html>`;
    res.send(docs);
});

app.listen(port, () => {
    console.log(`Web Server started on port ${port}`);
});