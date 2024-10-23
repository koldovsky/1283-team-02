document.addEventListener("DOMContentLoaded", function () {
  const checkCarousel = () => {
    const carouselNode = document.querySelector(".embla__container"); 
    const prevButton = document.querySelector(".embla__arrow-btn--left");
    const nextButton = document.querySelector(".embla__arrow-btn--right");

    if (carouselNode) {
      const options = { align: "start", loop: true };
      const emblaApi = EmblaCarousel(carouselNode, options); 
      prevButton.addEventListener("click", () => emblaApi.scrollPrev());
      nextButton.addEventListener("click", () => emblaApi.scrollNext());

      console.log(emblaApi.slideNodes()); 
      setTimeout(checkCarousel, 100);
    }
  };

  checkCarousel(); 
});
