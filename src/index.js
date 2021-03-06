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
      <div class="check-starters"></div>
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
      <div class="check-pasta"></div>
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
      <div class="check-pizza"></div>
      <p>$${pizzaItem.price.toFixed(2)}</p>
    </div>
  </div>`;

  htmlPizza += htmlSegment;
});

document.getElementById("pizza").innerHTML = htmlPizza;


////// SPICY ICON CHECK ////// 

// create a function with parameters; menu type and check class
function addSpicyIcon (type, check) {
  // for loop to cycle through the menu type
  for (let i = 0; i < type.length; i++) {
    // if the spicy property is true
    if (type[i].spicy) {
      // add the "spicy" class to show the icon
      check[i].classList.add("spicy");
    }
  }
};
// call the functions and add the parameters for each menu type and check-class
addSpicyIcon(starters, document.getElementsByClassName("check-starters"));
addSpicyIcon(pasta, document.getElementsByClassName("check-pasta"));
addSpicyIcon(pizza, document.getElementsByClassName("check-pizza"));


////// SPICY CHECKBOX ////// 

// create variable to store our checkbox input
let checkbox = document.querySelector('input[type=checkbox]');
// add event listener to track when the checkbox changes
// after a change fire the function below
checkbox.addEventListener('change', function() {
  // store all the elements with the class name spicy
  let items = document.getElementsByClassName("spicy");

  if(this.checked) {   
    // if checked display the elements with spicy 
    Array.prototype.forEach.call(items, item => {
      item.parentElement.parentElement.style.display = "inline";
    });
  } else {
    // if NOT checked display the elements with spicy 
    Array.prototype.forEach.call(items, item => {
      item.parentElement.parentElement.style.display = "none";
    });
    console.log(items);
  }
});