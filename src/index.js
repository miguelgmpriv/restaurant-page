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

    header.classList.add('header');
    navBar.classList.add('navbar');

    header.textContent = 'The Hungry Cat Cafe';

    mainContainer.appendChild(header);
    header.appendChild(navBar);
})();

const pageFooter = (() => {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const creditsLinks = document.createElement('ul');
    const a = document.createElement('a');
    a.title = 'test';
    a.href = 'https://www.freepik.com/photos/food';
    const li = document.createElement('li')
    li.textContent = 'Food photo created by timolina - www.freepik.com';
    a.appendChild(li);
    creditsLinks.appendChild(a);
    footer.appendChild(creditsLinks);
    mainContainer.appendChild(footer)
})();