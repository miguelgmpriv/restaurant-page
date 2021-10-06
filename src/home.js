class customerReview {
    constructor (customer, text){
        this.customer = customer;
        this.text = text;
    }
}
const content = document.createElement('div');
const restaurantTextDiv = document.createElement('div');

restaurantTextDiv.classList.add('restaurant-text');
content.classList.add('content');

const restaurantText = [
    'Tired and with no energy to cook?',
    'Leave the whiskas at home and enjoy our decadent fancy feast prepared by our team of world class chefs!',
    'All of our food is made with the highest quality ingredients, everyday.',
    'Come and see why our customers love us!'
]

let customerReviews = [];
customerReviews[0] = new customerReview ('-Garfield', `"Their lasagna is out of this world."`);
customerReviews[1] = new customerReview ('-Mr.Bigglesworth', `"After a long day of holding the world hostage, I am always looking forward to enjoying their honey garlic salmon. Highly recommend it!"`);
customerReviews[2] = new customerReview ('-Aratou', `"The chicken doesn't do squik-squik!"`);

restaurantText.forEach(element => {
    const h4 = document.createElement('h4');
    h4.textContent = element
    restaurantTextDiv.appendChild(h4);
});

content.appendChild(restaurantTextDiv);

customerReviews.forEach(element => {
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    h5.classList.add('customer-review');
    p.classList.add('customer');

    h5.textContent = element.text;
    p.textContent = element.customer;

    content.appendChild(h5);
    content.appendChild(p);
});

const pageHome = (() =>{
    return content;
});

export { pageHome };