const restaurantInfo = {
    header: 'Contact Us',
    email: 'catsareawesome@notrealemail.com',
    phone: '(123)456-7890',
    address: '123 Feline St',
    daysOpen: 'Open Tuesday - Sunday',
    hours: 'Hours: 9:00am - 9:00pm',
    daysClosed: 'Closed Monday',
}

const content = document.createElement('div');
content.classList.add('content');
content.id = 'content';

for (let key in restaurantInfo) {
    const p = document.createElement('p');
    p.textContent = restaurantInfo[key];
    content.appendChild(p);
};

const pageContact = () => {
    return content;
}

export { pageContact };