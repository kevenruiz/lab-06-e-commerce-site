import { hogwards } from '../product-poster.js';
import { createPosterLi } from '../utils.js';

console.log(hogwards);

// i need my UL from the DOM

const ul = document.querySelector('#product-list');


for (let hogs of hogwards) {
    // for every Hogwards member render an Li

    const li = createPosterLi(hogs);
    ul.append(li);


}
 // append that li to the ul
