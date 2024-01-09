// funcion para el scroll en el menu
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window.scrollY > 80);
});


// Trabajando en el menu hamburguesa
let menu = document.querySelector('#menu-icon'),
    navList = document.querySelector('.menuNavList');

// toggle hamburger menu icon
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

// Define the closeNav function
window.onscroll = () => {
    // Remove the bx-x class from the menu element
    menu.classList.remove('bx-x');

    // Remove the open class from the navList element
    navList.classList.remove('open');
}

//ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: false
});

sr.reveal('.home-text', {delay:300});
sr.reveal('.home-img', {delay:450});
sr.reveal('.container', {delay:450});

sr.reveal('.about-img', {});
sr.reveal('.about-text', {delay:300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .shop-content', {delay:300});


sr.reveal('.reviews, .contact', {delay:300});