window.onload = function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const gallery = document.querySelector('.speakers__catalog-gallery');
    const galleryItems = document.querySelectorAll('.speakers__card');
  
    let currentIndex = 0; // Начальный индекс
    const itemWidth = galleryItems[0].offsetWidth; // Ширина одного элемента
    const totalItems = galleryItems.length; // Общее количество элементов
  
    // Функция обновления позиции галереи
    function updateGallery() {
      gallery.style.transition = 'transform 0.5s ease-in-out';
      gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  
    // Прокрутка вперед
    nextButton.addEventListener('click', () => {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Вернуться к первому элементу после последнего
      }
      updateGallery();
    });
  
    // Прокрутка назад
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalItems - 1; // Перейти на последний элемент при прокрутке назад
      }
      updateGallery();
    });
  };
  