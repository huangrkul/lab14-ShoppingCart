/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var opEl = document.createElement('option');
    opEl.value = Product.allProducts[i].name;
    opEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(opEl);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var keyName = event.target.items.value;
  var keyValue = event.target.quantity.value;
  cart.addItem(keyName, keyValue);
  
  event.target.items.value = null;
  event.target.quantity.value = null;
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var addCounter = document.getElementById('itemCount');
  var countNum = 0;
  for(var i = 0; i < cart.items.length; i++){
    countNum += cart.items[i].quantity;
  }
  addCounter.textContent = countNum;

}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var cartItem = localStorage.getItem('cart');
  var cartItemParsed = JSON.parse(cartItem);
  var preview = document.getElementById('cartContents');
  var newUL = document.createElement('ul');
  //fix me because it's adding additional instances of li
  for (var i=0; i < cartItemParsed.length; i++) {
    new CartItem(cartItemParsed[i].product, cartItemParsed[i].quantity);
    var newLI = document.createElement('li');
    newLI.textContent = cartItemParsed[i].product + ': ' + cartItemParsed[i].quantity;
    newUL.appendChild(newLI);
  }
  preview.appendChild(newUL);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
