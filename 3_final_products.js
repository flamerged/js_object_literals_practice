/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.

var products = [];
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price

products = [
  {name: "apple", inventory: 20, unit_price: 0.2},
  {name: "banana", inventory: 15, unit_price: 0.5},
  {name: "avocado", inventory: 4, unit_price: 1.99},
];

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.

function listProducts(productsArray) {
    var inventoryItems = [];
    for (var i = 0; i < productsArray.length; i++) {
      inventoryItems.push(productsArray[i].name);
    }
return inventoryItems;
  }

// 4. Call the listProducts() function and log the returned value to the console.

console.log(listProducts(products));
  
// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value

function totalValue(productArray) {
  var totalValue = 0;
  for (var i = 0; i < productArray.length; i++) {
    totalValue += productArray[i].unit_price * productArray[i].inventory;
  }
       return totalValue;
};

// 6. Call the totalValue() function and log the returned value to the console.

console.log(totalValue(products));

// 7. Run your code by typing node 3_final_products.js in the console below