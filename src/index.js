import './styles.css';
import { pageHeader, pageFooter, navLinks } from './header-footer.js';

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

pageFooter(mainContainer);