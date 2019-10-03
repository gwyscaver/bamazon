# Bamazon

Welcome to Bamazon! This is an Amazon-like storefront built with MySQL and Node.js. 

Within the customer portal, you can view the inventory, choose an item you'd like to purchase along with the quantity, and voila! Transaction complete! However, if we do not have enough of the selected item in stock deeming us unable to fulfill your purchase, the transaction will not go through.

[GitHub Link](https://github.com/gwyscaver/bamazon)

[Video Playback](https://drive.google.com/file/d/154aH6bM4usVApHeI4A9z0D3I6BI-1_SG/view?usp=sharing)

![Video Tutorial](assets/images/video.jpg)



# Usage
1. Clone repo
2. npm install
3. cd bamazon
4. Please see notes below to run the app
5. ENJOY!

# Tech Used
* NPM Dependencies
    * inquirer
    * mysql
* Node.js
* MySQL


# Notes

## The prompts below will accept user input:
    1) ? Enter Product ID Number:
    2) ? How many units would you like to purchase?

## What Each Prompt Should Do:

Enter Product ID Number:
* Customer enters product id number from 1 through 10
* Order is placed



How many units would you like to purchase?
* Application will check Bamazon stock quantity
* If sufficient, customer's order is placed AND
* Total purchase price is shown back to customer THEN
* SQL database is updated to reflect remaining quantity left
* If insufficient quantity, customer will recieve a message to pick another item
* Order has been prevented from going through
* Connection ends


