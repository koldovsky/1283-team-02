const burger = document.querySelector('.header__burger');
const headerPosition = document.querySelector('.header__position');
const topBar = document.querySelector('.header__top-bar');
const navContainer = document.querySelector('.header__nav-container');
const social = document.querySelector('.social');

if (burger) {
    burger.addEventListener('click', () => {
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
    });
}
