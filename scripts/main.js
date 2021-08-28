const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.menu-close');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');


openMenu.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})

navLink.forEach(e => {
    e.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
})