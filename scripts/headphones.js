document.addEventListener("DOMContentLoaded", function() {
    const emblaNode = document.querySelector('.headphones__catalog');
    const embla = EmblaCarousel(emblaNode, {
      loop: true,          
      draggable: true,     
      speed: 4             
    });
  });
  