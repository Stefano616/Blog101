// import { postsInfoArray } from "./posts.js";
import postsDataJSON from "../posts-data.json" assert {type: 'json'};

const caruselSlidesContainer = document.getElementById("carusel-slides-container");
const createHtmlSlideCarusel = (postInfo, slideIndex, totalSlidesArray) => {
  return `<a href="./post.html?post_id=${postInfo.id - 1}" class="carousel-slide-a"><div class="carousel-slide-div transition-slide">
    <div class="slide-number-text">${slideIndex + 1}/${totalSlidesArray.length}</div>
    <img class="img-carousel" src=${postInfo.image} alt=${postInfo.description}>
      <div class="slide-title">${postInfo.title}</div>
  </div></a>`
}
let postsForCarusel = postsDataJSON.posts.filter((post) => post.tags.includes("#slideshow"));
postsForCarusel.map((slide, index, postsForCarusel) => caruselSlidesContainer.innerHTML += createHtmlSlideCarusel(slide, index, postsForCarusel));

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
function changeSlide(n = 1) {
  showSlides(currentSlideIndex += n);
}
function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}
showSlides(currentSlideIndex);
export { changeSlide, currentSlide };