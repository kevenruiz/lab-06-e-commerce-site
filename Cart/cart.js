import { getCart } from '../Local-storage-page/loca-storage-utils.js'
// i need my posters data
import { hogwards } from '../product-poster.js';
// LOOP THOUGHT LOCAL STORAGE INSTAD OF js FILE. 
//2. ON CLICK ADD ITEMS TO CART. 
// local storage can only do strings. 

//import { cart } from './cart-data.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';
const cart = getCart();

// I need my table from the DOM

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingHogwards = findById(hogwards, cartItem.id);
    const tr = createTableRow(cartItem, matchingHogwards);
    

    table.append(tr);
}

const totalRow = createTotalRow(cart, hogwards);

table.append(totalRow);

const button = document.querySelector('#finish-cart');
if (cart.length > 0) button.disabled = false;
else button.disabled = true;

button.addEventListener('click', () => {
    const cart = getCart();
    alert(JSON.stringify(cart));
    localStorage.clear();
    window.location = '/';

});




