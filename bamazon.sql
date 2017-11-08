DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INTEGER(50),
stock_quantity INTEGER(50)
);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES
("Jameson Irish Whiskey, 1.75L", "Liquor", 40, 100),
("Tito's Handmade Vodka, 1.75L", "Liquor", 45, 90),
("Lemons", "Produce", 1, 450),
("Ice, 20lb.", "Grocery", 2.50, 50),
("Coffee", "Grocery", 5, 45),
("Coca-Cola", "Grocery", 1.25, 100),
("Dr. Pepper", "Grocery", 1.25, 100),
("Ginger-Ale", "Grocery", 1.25, 100),
("Magic-Mushrooms, 3.5g", "Produce", 10, 250),
("Blue Dream, 3.5g", "Produce", 10, 250),
("Fruity Pebbles, 3.5g", "Grocery", 10, 150),
("Blood Orange, 3.5g", "Produce", 10, 50),
("White Widow, 3.5g", "Spider", 10, 70);

SELECT * FROM bamazon.products;