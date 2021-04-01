// i need my posters data
import { hogwards } from '../product-poster.js';
import { cart } from './cart-data.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';


// I need my table from the DOM

const table = document.querySelector('table');

for (let cartItem of cart) {
    const matchingHogwards = findById(hogwards, cartItem.id);

    
 
    const tr = createTableRow(cartItem, matchingHogwards);
    // and append that tr to the table

    table.append(tr);
}

const totalRow = createTotalRow(cart, hogwards);

table.append(totalRow);






