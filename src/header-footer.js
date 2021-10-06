const pageTitle = 'The Hungry Cat Cafe';
const navLinks = ['home', 'menu', 'contact']

const header = document.createElement('div');
header.classList.add('header');
header.textContent = pageTitle;

const navBar = document.createElement('ul');
navBar.classList.add('navbar');

navLinks.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element[0].toUpperCase() + element.slice(1);
    li.id = element;
    navBar.appendChild(li);
});

const pageHeader = ((element) => {
    element.appendChild(header);
    header.appendChild(navBar);
});


const footer = document.createElement('div');
const footerBar = document.createElement('ul');

footer.classList.add('footer');

class footerBarLink {
    constructor(text, url){
        this.text = text;
        this.url = url;
    }
}
let footerLinks = [];
footerLinks[0] = new footerBarLink('Food photo created by timolina - www.freepik.com', 'https://www.freepik.com/photos/food');

footerLinks.forEach(element => {
    const a = document.createElement('a');
    a.title = element.text;
    a.href = element.url;

    const li = document.createElement('li');
    li.textContent = element.text;
    
    a.appendChild(li);
    footerBar.appendChild(a);
});

const pageFooter = ((element) => {
    footer.appendChild(footerBar);
    element.appendChild(footer)
});

export { pageHeader , pageFooter, navLinks };