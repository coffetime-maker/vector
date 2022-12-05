const bar = document.querySelector('.bar');
const navMenu = document.querySelector('.menu');

bar.addEventListener('click', mobileMenu);

function mobileMenu() {
    bar.classList.toggle('active');
    navMenu.classList.toggle('active');
    cart.classList.remove('active')
};

const navLink = document.querySelectorAll('.menu__item');

navLink.forEach(e => e.addEventListener('click', closeMenu));

function closeMenu() {
    bar.classList.remove('active');
    navMenu.classList.remove('active');
};