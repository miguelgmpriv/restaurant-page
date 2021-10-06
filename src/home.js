class customerReview {
    constructor (author, text){
        this.author = author;
        this.text = text;
    }
}
const content = document.createElement('div');
content.classList.add('content');
const restaurantText = [
    'Tired and with no energy to cook?',
    'Leave the whiskas at home and come enjoy our decadent fancy feast prepared by our team of world class chefs!',
    'All of our food is made with the highest quality ingredients, everyday.',
]

let customerReviews = [];
customerReviews[0] = new customerReview ('Garfield', `"Their lasagna is out of this world."`);
customerReviews[1] = new customerReview ('Mr.Bigglesworth', `"After a long day of holding the world hostage, I am always looking forward to enjoying their honey garlic salmon. Highly recommend it!"`);
customerReviews[2] = new customerReview ('Aratou', `"The chicken doesn't do squik-squil!"`);

restaurantText.forEach(element => {
    const h5 = document.createElement('h5');

    h5.textContent = element
    content.appendChild(h5);
});

const pageHome = ((element) =>{
    element.appendChild(content);
});

export { pageHome };