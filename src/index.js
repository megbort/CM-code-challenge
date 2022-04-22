import menu from "./menu.js";

// create a global variable to store items from the menu js object
const menuItems = menu.items;


////// FILTER //////

// create filter iterators to collect menu item for each dish type
let starters = menuItems.filter(menuType => menuType.type === "starters");
let pasta = menuItems.filter(menuType => menuType.type === "pasta");
let pizza = menuItems.filter(menuType => menuType.type === "pizza");


////// SORT //////

// sort items in decending oreder based on menuOrder number 
starters.sort((a,b) => {
  return a.menuOrder - b.menuOrder;
});
pasta.sort((a,b) => {
  return a.menuOrder - b.menuOrder;
});
pizza.sort((a,b) => {
  return a.menuOrder - b.menuOrder;
});


////// RENDER //////

// STARTERS
// create an empty gloabl variable to store values
let htmlStarters = "";
// forEach method to through each starter item
starters.forEach(starters => {
  // create a local variable to store HTML and data output 
  // add toFixed(2) to have 2 decimal places in the price
  let htmlSegment = `
  <h3>${starters.name}</h3>
  <p>${starters.description}</p>
  <p>$${starters.price.toFixed(2)}</p>`;
  // update global variable with local and add rendered data
  htmlStarters += htmlSegment;
});
// add the rendered data to the DOM by targeting the element id
document.getElementById("starters").innerHTML = htmlStarters;

// PASTA (repeat above)
let htmlPasta = "";
pasta.forEach(pasta => {
  let htmlSegment = `
  <h3>${pasta.name}</h3>
  <p>${pasta.description}</p>
  <p>$${pasta.price}</p>`;

  htmlPasta += htmlSegment;
});

document.getElementById("pasta").innerHTML = htmlPasta;

// PIZZA (repeat above)
let htmlPizza = "";
pizza.forEach(pizza => {
  let htmlSegment = `
  <h3>${pizza.name}</h3>
  <p>${pizza.description}</p>
  <p>$${pizza.price}</p>`;

  htmlPizza += htmlSegment;
});

document.getElementById("pizza").innerHTML = htmlPizza;










