import './styles.css';
import { pageHeader, pageFooter, navBar } from './header-footer.js';
import { pageHome } from './home.js';
import { pageMenu } from './menu.js';

const mainContainer = document.createElement('div')
mainContainer.classList.add('container');
let content = document.createElement('div');

document.body.appendChild(mainContainer);

pageHeader(mainContainer);
content = pageHome();
mainContainer.appendChild(content);
pageFooter(mainContainer);

console.log(navBar);
mainContainer.replaceChild(pageMenu(), content);
