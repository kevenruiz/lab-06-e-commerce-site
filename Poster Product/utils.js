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

    image.src = hogwards.image;

    const pHouse = document.createElement('p');

    pHouse.classList.createElement('p');
    pHouse.textContent = hogwards.house;

    const pIsDeathEater = document.createElement('p');

    pIsDeathEater.textContent = hogwards.isDeathEater ? 'Not a Death Eater' : 'Death Eater';

    const pCategory = document.createElement('p');

    pCategory.classList.createElement('p');
    pCategory.textContent = hogwards.category;

    const pPrice = document.createElement('p');

    pPrice.textContent = hogwards.price.toLocalString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const button = document.createElement(button);

    button.textContent = 'Add poster to Cart';

    li.append(pName, pDescription, image, pHouse, pIsDeathEater, pCategory, pPrice);

    return li;

}







}