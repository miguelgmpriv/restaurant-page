import './styles.css';
import { pageHeader, pageFooter, navLinks } from './header-footer.js';
import { pageHome } from './home.js';

const mainContainer = document.createElement('div')
mainContainer.classList.add('container');
let content;

document.body.appendChild(mainContainer);

pageHeader(mainContainer);
content = pageHome();
mainContainer.appendChild(content);
pageFooter(mainContainer);

const clearPage = () => {
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}

clearPage();