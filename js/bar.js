let bar = document.querySelector('.bar');
let navMenu = document.querySelector('.menu');

bar.addEventListener('click', mobileMenu);

function mobileMenu() {
    bar.classList.toggle('active');
    navMenu.classList.toggle('active');
    cart.classList.remove('active')
}