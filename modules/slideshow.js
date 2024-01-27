let currentSlideIndex = 1;

showSlides(currentSlideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide-div");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {currentSlideIndex = 1}
  if (n < 1) {currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot--active", "");
  }
  slides[currentSlideIndex-1].style.display = "block";
  dots[currentSlideIndex-1].className += " dot--active";
}

function changeSlide(n) {
    showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

export {changeSlide, currentSlide};