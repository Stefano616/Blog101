let currentSlideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-slide-div");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { currentSlideIndex = 1 }
  if (n < 1) { currentSlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("carousel-slide-div--hide");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot--active", "");
  }
  slides[currentSlideIndex - 1].classList.remove("carousel-slide-div--hide");
  dots[currentSlideIndex - 1].className += " dot--active";
}

function changeSlide(n) {
  showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

showSlides(currentSlideIndex);

export { changeSlide, currentSlide };