// i need my posters data
import { hogwards } from '../product-poster.js';
// LOOP THOUGHT LOCAL STORAGE INSTAD OF js FILE. 
//2. ON CLICK ADD ITEMS TO CART. 
// local storage can only do strings. 

import { cart } from './cart-data.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';


// I need my table from the DOM

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingHogwards = findById(hogwards, cartItem.id);
    const tr = createTableRow(cartItem, matchingHogwards);
    

    table.append(tr);
}

const totalRow = createTotalRow(cart, hogwards);

table.append(totalRow);






