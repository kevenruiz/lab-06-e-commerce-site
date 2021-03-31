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

    const pHouse = document.creatAeElement('p');

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







