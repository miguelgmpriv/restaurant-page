import './styles.css';
import { pageHeader, pageFooter, navBar } from './header-footer.js';
import { pageHome } from './home.js';
import { pageMenu } from './menu.js';

const mainContainer = document.createElement('div')
mainContainer.classList.add('container');
let content = document.createElement('div');
content.id = 'content'

document.body.appendChild(mainContainer);

pageHeader(mainContainer);
content = pageHome();
mainContainer.appendChild(content);
pageFooter(mainContainer);

navBar.addEventListener('click', (e) => {
    content = document.getElementById('content');
    e.target.id === 'home' ? content.replaceWith(pageHome()) :
        e.target.id === 'menu' ? content.replaceWith(pageMenu()) :
        console.log(e);
})
console.log(navBar);

console.log(content);
console.log(pageHome());