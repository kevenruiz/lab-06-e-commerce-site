import { findById } from '../utils.js';
// this is a mgic string that should live in a constant. 
const CART = 'CART';

export function getCart() {
    const stringyCart = localStorage.getItem('CART');
    const parsedCart = JSON.parse(stringyCart);
    if (!parsedCart) return [];
    else return parsedCart;

}

export function setCart(parsedCart) {
    const stringyCart = JSON.stringify(parsedCart);

    localStorage.setItem(CART, stringyCart);
}
export function addItemToCart(productId) {
    //    do we already have one of these in the cart?
    const cart = getCart();

    const matchingItem = findById(cart, productId);
    console.log(cart);

    if (matchingItem) {
        // if so, increment the quantity of that item
        matchingItem.quantity++;
    } else {
        // if not, create an item and push it into the cart
        const item = {
            id: productId,
            quantity: 1
        };

        cart.push(item);
    }

    // save our cart in local storage
    setCart(cart);
}
