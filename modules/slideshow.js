import postsDataJSON from "../posts-data.json" assert {type: 'json'};
import 'https://cdnjs.cloudflare.com/ajax/libs/swiped-events/1.1.9/swiped-events.min.js';

const carouselSlidesContainer = document.getElementById("carousel-slides-container");
const carouselSlideDotsContainer = document.getElementById("carousel-slide-dots-container");
let r = document.documentElement;

const createHtmlSlidecarousel = (postInfo, slideIndex, totalSlidesArray) => {
  return `<a href="./post.html?post_id=${postInfo.id - 1}" class="carousel-slide-a"><div class="carousel-slide-div carousel-slide-div--hide">
    <img class="img-carousel" src=${postInfo.image} alt=${postInfo.description}>
    <div class="slide-number-text">${slideIndex + 1}/${totalSlidesArray.length}</div>
      <div class="slide-title">${postInfo.title}</div>
  </div></a>`;
}

const addSlideDot = () => {
  return `<span class="dot"></span>`;
}

let postsForcarouselArr = postsDataJSON.posts.filter((post) => post.tags.includes("#slideshow"));

postsForcarouselArr.map((slide, index, postsForcarouselArr) => {
  carouselSlidesContainer.innerHTML += createHtmlSlidecarousel(slide, index, postsForcarouselArr);
  carouselSlideDotsContainer.innerHTML += addSlideDot()
});

const carouselSlides = document.getElementsByClassName("carousel-slide-a");

[...carouselSlides].forEach(slide => {
  slide.addEventListener("swiped", (e) => {
    if (e.detail.dir === 'left') {
      changeSlide(1);
    } else {
      changeSlide(-1);
    }
  })
})

let currentSlideIndex = 0;
const showSlides = (slideOut, current) => {

  let i;
  const slides = document.getElementsByClassName("carousel-slide-div");
  const carouselImages = document.getElementsByClassName("img-carousel");
  const dots = document.getElementsByClassName("dot");

  if (current > slides.length - 1) {
    currentSlideIndex = 0;
  }

  if (current < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot--active", "");
  }

  if (slideOut === current) {
    slides[currentSlideIndex].classList.toggle("carousel-slide-div--hide", false);
    carouselImages[currentSlideIndex].classList.toggle("transition-slide-in", true);
    dots[currentSlideIndex].classList.toggle("dot--active", true);
  } else {
    carouselImages[slideOut].classList.toggle("transition-slide-out", true);
    setTimeout(() => {
      carouselImages[slideOut].classList.toggle("transition-slide-out", false);
      slides[slideOut].classList.toggle("carousel-slide-div--hide", true);
    }, 500);
    setTimeout(() => {
      slides[currentSlideIndex].classList.toggle("carousel-slide-div--hide", false);
      carouselImages[currentSlideIndex].classList.toggle("transition-slide-in", true);
      dots[currentSlideIndex].classList.toggle("dot--active", true);
    }, 500);
  }
}

const changeSlide = (n = 1) => {
  r.style.setProperty('--translate-direction', `${-n}`);
  showSlides(currentSlideIndex, currentSlideIndex += n);
}

const currentSlide = (n) => {
  showSlides(currentSlideIndex, currentSlideIndex = n);
}

showSlides(currentSlideIndex, currentSlideIndex);

export { changeSlide, currentSlide };