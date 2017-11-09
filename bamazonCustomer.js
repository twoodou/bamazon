var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connection success!");
  makeTable();
});

// Display all of the items available for sale.
var makeTable = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + "  ||  " + res[i].product_name + "  ||  " +
        res[i].department_name + "  ||  " + res[i].price + "  ||  " + res[i].stock_quantity + "\n");
    }
    promptCustomer(res);
  });
};

// Ask: Which product would you like to buy? (ID)
var promptCustomer = function(res) {
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "Which item would you like to purchase?"
  }]).then(function(answer) {
    var correct = false;
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name == answer.choice) {
        correct = true;
        var product = answer.choice;
        var id = i;
        console.log(product);

        // Ask: How many units of the product would you like to buy?
        inquirer.prompt({
          type: "input",
          name: "qty",
          message: "How many would you like to buy?",
          validate: function(value) {
            if (isNaN(value) == false) {
              return true;
            } else {
              return false;
            }
          }
        }).then(function(answer) {
          if ((res[id].stock_quantity - answer.qty) > 0) {
            connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.qty) + "' WHERE product_name='" + product + "'", function(err, res2) {
              console.log("Product Purchased!");
              makeTable();
            });
          } else {
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
        });
      }
    }
  });
};
