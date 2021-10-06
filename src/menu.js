import salmon from './salmon.jpg';
import lasagna from './lasagna.jpg';
import chickenwings from './chickenwings.jpg';

class menuItem {
    constructor (name, ingredients, price, image){
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.image = image;
    }
}

let menuItems = [];

menuItems[0] = new menuItem(
    'Salmon', 
    'Rosemary infused baked salmon basted with our house sauce, roasted tomatoes and mushrooms',
    '9.00',
    salmon
);
menuItems[1] = new menuItem(
    'Lasagna',
    'Classic lasagna with our bolognese sauce and gluten free pasta',
    '8.00',
    lasagna
);
menuItems[2] = new menuItem(
    'Chicken Wings',
    'Honey BBQ chicken wings with Ranch sauce',
    '10.00',
    chickenwings
);

const content = document.createElement('div');
content.classList.add('content');

menuItems.forEach(element =>{
    const itemContainer = document.createElement('div');
    const itemName = document.createElement('h4');
    const itemIngredients = document.createElement('p');
    const itemPrice = document.createElement('p');
    const itemImage = new Image();

    itemName.textContent = element.name;
    itemIngredients.textContent = element.ingredients;
    itemPrice.textContent = element.price;
    itemImage.src = element.image;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemIngredients);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemImage);
    content.appendChild(itemContainer)
});

const pageMenu = () => {
    return content;
}

export { pageMenu };