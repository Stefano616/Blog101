const navigationMenu = document.querySelector('.navigation');
const navToggleButton = document.querySelector('.mobile-nav-toggle');

navToggleButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('active');
    navToggleButton.classList.toggle('active');
})