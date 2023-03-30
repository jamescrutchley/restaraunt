import renderHomepage from './homepage';
import renderMenuPage from './menu';
import renderContactPage from './contact';

const contentDiv = document.querySelector('#content');

const header = document.createElement('div');

const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', renderHomepage);

const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', renderMenuPage);

const contactTab = document.createElement('button');
contactTab.textContent = 'Contact';
contactTab.addEventListener('click', renderContactPage);


header.appendChild(menuTab);
header.appendChild(contactTab);
header.appendChild(homeTab);
document.body.appendChild(header);

renderHomepage();