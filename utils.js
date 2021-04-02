import { hogwards } from './product-poster.js';

export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}



export function createPosterLi(hogwards) {
    const li = document.createElement('li');

    li.classList.add('hogwards');
    li.style.background = hogwards.color;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = hogwards.name;

    const pDescription = document.createElement('p');

    pDescription.classList.add('description');
    pDescription.textContent = hogwards.description;

    const image = document.createElement('img');
    image.classList.add('image');

    image.src = hogwards.image;

    const pHouse = document.createElement('p');

    pHouse.classList.add('p');
    pHouse.textContent = hogwards.house;

    const pIsDeathEater = document.createElement('p');

    pIsDeathEater.textContent = hogwards.isDeathEater ? 'Not a Death Eater' : 'Death Eater';

    const pCategory = document.createElement('p');

    pCategory.classList.add('p');
    pCategory.textContent = hogwards.category;

    const pPrice = document.createElement('p');
    pPrice.textContent = hogwards.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const button = document.createElement('button');

    button.textContent = 'Add poster to Cart';

    li.append(pName, pDescription, image, pHouse, pIsDeathEater, pCategory, pPrice, button);

    return li;



}


export function createTableRow(somePoster, someHogwards) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = someHogwards.name;
    tdQuantity.textContent = somePoster.quantity;
    const total = someHogwards.price * somePoster.quantity;



   // const totalAsUSD = `$${total}.00`;
    const config = {
        currency: 'USD',
        style: 'currency'
    };

    const totalAsUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}


export function createTotalRow(cartArray, hogwardsArray) {
    let sum = 0;

    for (let cartItem of cartArray) {
        
        const matchingHogwards = findById(hogwardsArray, cartItem.id);

        const lineItem = matchingHogwards.price * cartItem.quantity;
        sum = sum + lineItem;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);
    
    return tr;
}

export function calcItemTotal(price, quantity) {
    return price * quantity;
}


export function calcOrderTotal(cartItem) {
    let total = 0;
    for (let i=0; i < cartItem.length; i++) {
        const item = cartItem[i];
       // console.log(item, 'item');
        const cartObject = findById(hogwards, item.id)
       // console.log(item.id);
        const itemTotal = item.quantity * cartObject.price;
        //console.log(item.quantity)
      //  console.log(cartObject.price)
       //console.log(cartObject)
        
        total += itemTotal;
       // console.log(total)
    }


    return total;
}
