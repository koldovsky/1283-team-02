document.addEventListener("DOMContentLoaded", function () {
  const checkCarousel = () => {
    const carouselNode = document.querySelector(".embla__viewport");
    const slidesContainer = document.querySelector(".embla__container");
    const slides = Array.from(document.querySelectorAll(".embla__slide"));
    const prevButton = document.querySelector(".embla__arrow-btn--left");
    const nextButton = document.querySelector(".embla__arrow-btn--right");

    if (carouselNode && slidesContainer && slides.length > 1) {
      const repeatCount = 30;

      for (let i = 0; i < repeatCount; i++) {
        const startClones = slides.map(slide => slide.cloneNode(true));
        const endClones = slides.map(slide => slide.cloneNode(true)).reverse();

        endClones.forEach(clone => slidesContainer.insertBefore(clone, slidesContainer.firstChild));
        startClones.forEach(clone => slidesContainer.appendChild(clone));
      }

      const options = { align: "start", loop: false };
      const emblaApi = EmblaCarousel(carouselNode, options);

      emblaApi.on("init", () => {
        emblaApi.scrollTo(slides.length * repeatCount, false); 
      });

      prevButton.addEventListener("click", () => emblaApi.scrollPrev());
      nextButton.addEventListener("click", () => emblaApi.scrollNext());

      console.log(emblaApi.slideNodes());
    } else {
      setTimeout(checkCarousel, 100);
    }
  };

  checkCarousel();
});
