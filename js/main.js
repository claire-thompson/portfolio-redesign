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

/* const navSize = () => {
    if (screen.availWidth < 900) {
        navMenu.style.height = '0px';
        navItems.style.height = '0px';
        menuButton.className = 'fas fa-bars';
        navMenu.style.transition = 'none';
        toggleNav();
    } else if (screen.availWidth >= 900) {
        navMenu.style.height = 'unset';
        navItems.style.height = 'unset';
        navMenu.style.transition = 'none';
        menuButton.className = 'fas fa-times';
    }
}

window.addEventListener('resize', navSize);*/