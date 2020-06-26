const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');
const navItems = document.getElementById('nav-items');

const toggleNav = () => {
    if (navMenu.style.height == '245px') {
        navItems.style.height = '0px'
        navMenu.style.height = '0px';
        menuButton.className = 'fas fa-bars';
    } else {
        navMenu.style.height = '245px';
        navItems.style.height = '220px';
        menuButton.className = 'fas fa-times';
    }
};

menuButton.addEventListener('click', toggleNav)