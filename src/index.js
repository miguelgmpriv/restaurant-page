import './styles.css';
import { pageHeader, pageFooter, navLinks } from './header-footer.js';
import { pageHome } from './home.js';

const mainContainer = document.createElement('div')
mainContainer.classList.add('container');
document.body.appendChild(mainContainer);

pageHeader(mainContainer);

pageHome(mainContainer);

pageFooter(mainContainer);