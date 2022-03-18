/**
 * add mod . js
 */

exports.add = function(req,res,vals) {
    const op = ""+vals.operation;
    // const sum = parseInt(vals.first)+parseInt(vals.second);
    // const sum = 0.0;
    switch(op){
        case "+":
            const sum = parseInt(vals.first)+parseInt(vals.second);
            break;
        case "-":
            const sum = parseInt(vals.first)-parseInt(vals.second);
            break;
        case "x":
            const sum = parseInt(vals.first)*parseInt(vals.second);
            break;
        case "/":
            if(parseInt(vals.second)!=0){
                const sum = parseInt(vals.first)/parseInt(vals.second);
            }
            break;
        default:
            const sum = 0.0;
            console.log("undefiened operation");
            break;
    }
    res.writeHead(200, {"Content-Type" : "text/html"});
    const content = `<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title></head>
    <body><h1>The sum is: ${sum}</h1>
    <div style="padding-top: 10px;">
            <a href="http://127.0.0.1:5501/Node/page.html">Anathor page</a>
        </div></body></html>`;
    res.write(content);
    return res.end();
}