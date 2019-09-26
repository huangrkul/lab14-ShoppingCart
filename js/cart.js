/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

var tBody = document.getElementsByTagName('tbody');
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (var i=0; i < cart.length; i++) {
    var tR = document.createElement('tr');
    var tD1 = document.createElement('td');
    tD1.textContent = "delete";
    tD1.addEventListener('click', removeItemFRomCart);
    var tD2 = document.createElement('td');
    tD2.textContent = cart[i].quantity;
    console.log(cart[i].quantity);
    var tD3 = document.createElement('td');
    tD3.textContent = cart[i].product;
    console.log(cart[i].product);
    tR.appendChild(tD1);
    tR.appendChild(tD2);
    tR.appendChild(tD3);
  }
  tBody.appendChild(tR);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
