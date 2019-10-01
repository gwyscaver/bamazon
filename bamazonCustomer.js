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

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    console.log("\n");
    displayProducts();
});

function displayProducts() {
    console.log("------------------------------------------------------------------------------------");
    console.log("                       Diplaying all available products...");                       
    console.log("------------------------------------------------------------------------------------");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        purchItem();
    });
}

// function which prompts the user for what action they should take
var purchItem = function () {
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "Enter Product ID Number:",
    }, {
        name: "stock_qty",
        type: "input",
        message: "How many units would you like to purchase?",

    }]).then(function (answer) {
        connection.query("SELECT * FROM products WHERE item_id =" + answer.item_id, function (err, res) {
            if (err) throw err;
            var chosenItem;
            for (let i = 0; i < res.length; i++) {
                if (res[i].item_id === parseInt(answer.item_id)) {
                    chosenItem = res[i];
                }
            }
            if (chosenItem.stock_qty > parseInt(answer.stock_qty)) {
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [{
                            stock_qty: (chosenItem.stock_qty - parseInt(answer.stock_qty))
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw error;
                        console.log("Thank you for your purchase!  Your total is " + "$" + 
                        (parseInt(answer.stock_qty) * chosenItem.price).toFixed(2));
                        connection.end();
                    }
                );
            } else {
                console.log("We're sorry.  We don't have enough in stock. Please pick another item to purchase.");
                connection.end();
            }
        });
    });
};
