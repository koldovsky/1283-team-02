const slide = [
    '<div><img src="./assets/images/companies-logo/apple-logo.svg" alt="apple logo"></div>',
    '<div><img src="./assets/images/companies-logo/beyer-logo.svg" alt="beyer logo"></div>',
    '<div><img src="./assets/images/companies-logo/jbl-logo.svg" alt="jbl logo"></div>',
    '<div><img src="./assets/images/companies-logo/marshall-logo.svg" alt="marshall logo"></div>',
    '<div><img src="./assets/images/companies-logo/panasonic-logo.svg" alt="panasonic logo"></div>',
    '<div><img src="./assets/images/companies-logo/samsung-logo.svg" alt="samsung logo"></div>',
    '<div><img src="./assets/images/companies-logo/sennheiser-logo.svg" alt="sennheiser logo"></div>',
    '<div><img src="./assets/images/companies-logo/sony-logo.svg" alt="sony logo"></div>',
];

let currentSlideIdx = 0;

function renderCarousels() {
    const slidesContainer = document.querySelector('.companies-carousel__slides');
    slidesContainer.innerHTML = slide[currentSlideIdx];
    if (window.matchMedia('(min-width: 479px)').matches) {
        const secondSlidesIndex = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
        slidesContainer.innerHTML += slide[secondSlidesIndex];
        if (window.matchMedia('(min-width: 767px)').matches) {
            const fourSlidesIndex = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slide[fourSlidesIndex];
    }
}

function nextSlides () {
    currentSlideIdx = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
    renderCarousels();
}

function prevSlides () {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slide.length - 1 : currentSlideIdx - 1;
    renderCarousels();
}

setInterval(nextSlides, 5000);
renderCarousels();

const nextButton = document.querySelector('.companies-carousel__btn-next');
nextButton.addEventListener('click', nextSlides);

const prevButton = document.querySelector('.companies-carousel__btn-prev');
prevButton.addEventListener('click', prevSlides);