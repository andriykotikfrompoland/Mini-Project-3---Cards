function slidesPlugin(activeSlide = 4) {
  // обращаюсь к слайдам по классу
  const slides = document.querySelectorAll(".slide");

  // делаю слайд активным
  slides[activeSlide].classList.add("active");

  // при клике слайд становится активным
  // другие классы стают неактивными
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  // функция делает класс не активным
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin(4);
