import './styles.css';

const mainContainer = document.createElement('div')
mainContainer.classList.add('container');
document.body.appendChild(mainContainer);


const pageHeader = (() => {
    const linkArray = ['home','menu','contact']
    const header = document.createElement('div');
    const navBar = document.createElement('ul');

    linkArray.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element[0].toUpperCase() + element.slice(1);
        li.id = element;
        navBar.appendChild(li);
    })
/*     const homeLink = document.createElement('li');
    const menuLink = document.createElement('li');
    const contactLink = document.createElement('li');
 */
    header.classList.add('header');

    header.textContent = 'The Hungry Cat Cafe';
/*     homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(contactLink); */

    mainContainer.appendChild(header);
    header.appendChild(navBar);
})();