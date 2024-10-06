var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, 
    spaceBetween: 30,  
    loop: true,  
    loopedSlides: 20,  
    centeredSlides: true,  
    speed: 600,  
    freeMode: true,  
    freeModeMomentum: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
