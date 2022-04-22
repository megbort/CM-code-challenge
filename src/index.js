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
  <div class="menu-item">
    <h3>${starters.name}</h3>
    <div class="is-flex">
      <p class="is-flex-75">${starters.description}</p>
      <p>$${starters.price.toFixed(2)}</p>
    </div>
  </div>`;
  // update global variable with local and add rendered data
  htmlStarters += htmlSegment;
});
// add the rendered data to the DOM by targeting the element id
document.getElementById("starters").innerHTML = htmlStarters;

// PASTA (repeat above)
let htmlPasta = "";
pasta.forEach(pasta => {
  let htmlSegment = `
  <div class="menu-item">
    <h3>${pasta.name}</h3>
    <div class="is-flex">
      <p class="is-flex-75">${pasta.description}</p>
      <p>$${pasta.price.toFixed(2)}</p>
    </div>
  </div>`;

  htmlPasta += htmlSegment;
});

document.getElementById("pasta").innerHTML = htmlPasta;

// PIZZA (repeat above)
let htmlPizza = "";
pizza.forEach(pizzaItem => {
  let htmlSegment = `
  <div class="menu-item">
    <h3>${pizzaItem.name}</h3>
    <div class="is-flex">
      <p class="is-flex-75">${pizzaItem.description}</p>
      <div class="check"></div>
      <p>$${pizzaItem.price.toFixed(2)}</p>
    </div>
  </div>`;

  htmlPizza += htmlSegment;
});

document.getElementById("pizza").innerHTML = htmlPizza;


////// SPICY CHECK ////// 

// create a variable and store all classes with 'check"
const spicyClass = document.getElementsByClassName("check");
// loop through pizza items and if the spicy property is true, add the "spicy" class that holds the spicy svg
for (let i = 0; i < pizza.length; i++) {
  if (pizza[i].spicy) {
    spicyClass[i].classList.add("spicy");
  }
}

