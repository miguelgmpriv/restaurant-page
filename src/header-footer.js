const pageTitle = 'The Hungry Cat Cafe';
const linkArray = ['home', 'menu', 'contact']

const header = document.createElement('div');
header.classList.add('header');
header.textContent = pageTitle;

const navBar = document.createElement('ul');
navBar.classList.add('navbar');

linkArray.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element[0].toUpperCase() + element.slice(1);
    li.id = element;
    navBar.appendChild(li);
});
const pageHeader = ((element) => {
    element.appendChild(header);
    header.appendChild(navBar);
});

export default pageHeader;