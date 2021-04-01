// this is a mgic string that should live in a constant. 
const CART = 'CART';

export function getCart() {
    const stringyCart = local.Storage.getItem('CART');

    const parsedCart = JSON.parse(stringyCart);

    return parsedCart;

}

export function setCart(parsedCart) {
    const stringyCart = JSON.stringify(parsedCart);

    localStorage.setItem(CART, stringyCart);
}