var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();
    
  });

function displayProducts() {
    console.log("------------------------------------------------------------------------------------\n")
    console.log("Diplaying all available products...\n");
    console.log("------------------------------------------------------------------------------------\n")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.end();
    });
}

// // function which prompts the user for what action they should take

//     inquirer
//         .prompt({
//             name: "postOrBid",
//             type: "list",
//             message: "Would you like to [POST] an auction or [BID] on an auction?",
//             choices: ["POST", "BID", "EXIT"]
//         })
//         .then(function (answer) {
//             // based on their answer, either call the bid or the post functions
//             if (answer.postOrBid === "POST") {
//                 postAuction();
//             } else if (answer.postOrBid === "BID") {
//                 bidAuction();
//             } else {
//                 connection.end();
//             }
//         });
// }