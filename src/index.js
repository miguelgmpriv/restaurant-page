import './styles.css';
import pageHeader from './header-footer.js';

const mainContainer = document.createElement('div')
mainContainer.classList.add('container');
document.body.appendChild(mainContainer);

pageHeader(mainContainer);

const pageContent = (() => {
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Leave the whiskas at home and come enjoy our decadent fancy feast prepared by our team of world class chefs!';
    mainContainer.appendChild(content);
})();
const pageFooter = (() => {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const creditsLinks = document.createElement('ul');
    const a = document.createElement('a');
    a.title = 'https://www.freepik.com/photos/food';
    a.href = 'https://www.freepik.com/photos/food';
    const li = document.createElement('li')
    li.textContent = 'Food photo created by timolina - www.freepik.com';
    a.appendChild(li);
    creditsLinks.appendChild(a);
    footer.appendChild(creditsLinks);
    mainContainer.appendChild(footer)
})();