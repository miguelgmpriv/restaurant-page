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