const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');
const navItems = document.getElementById('nav-items');

const toggleNav = () => {
    if ((navMenu.className == 'visible') || (navMenu.style.height == 'unset')) {
        navItems.className = 'hidden'
        navMenu.className = 'hidden';
        menuButton.className = 'fas fa-bars';
    } else if (navMenu.className = 'hidden') {
        navMenu.className = 'visible';
        navItems.className = 'visible';
        menuButton.className = 'fas fa-times';
    }
};

menuButton.addEventListener('click', toggleNav);