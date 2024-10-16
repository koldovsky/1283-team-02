const burger = document.querySelector('.header__burger');
const headerPosition = document.querySelector('.header__position');
const topBar = document.querySelector('.header__top-bar');
const navContainer = document.querySelector('.header__nav-container');
const social = document.querySelector('.social');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.body;
const heroSection = document.querySelector('.header__hero');

function toggleMenu() {
    // Toggle burger menu open state
    burger.classList.toggle('open');

    // Toggle header__position styles
    headerPosition.classList.toggle('header__position--active');

    // Toggle header__top-bar display style
    topBar.classList.toggle('header__top-bar--active');

    // Toggle header__nav-container display style
    navContainer.classList.toggle('header__nav-container--active');

    // Toggle social display style
    social.classList.toggle('social--active');

    // Toggle body scroll
    if (burger.classList.contains('open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

if (burger) {
    burger.addEventListener('click', toggleMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Check active page and update header accordingly
if (window.location.pathname.includes('product.html')) {
    if (heroSection) {
        heroSection.style.display = 'none';
    }
    headerPosition.style.position = 'relative';
} else if (window.location.pathname.includes('index.html')) {
    if (heroSection) {
        heroSection.style.display = 'block';
    }
    headerPosition.style.position = 'absolute';
}