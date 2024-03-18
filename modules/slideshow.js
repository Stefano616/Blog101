import postsDataJSON from "../posts-data.json" assert { type: "json" };

let postsForCarouselArr = postsDataJSON.posts.filter((post) =>
  post.tags.includes("#slideshow")
);

const carouselSlidesContainer = document.getElementById(
  "carousel-slides-container"
);
const carouselSlideDotsContainer = document.getElementById(
  "carousel-slide-dots-container"
);
let root = document.documentElement;

// const createHtmlSlideCarousel = (postInfo, slideIndex, totalSlidesArray) => {
//   const contentHtml = `<a href="./post.html?post_id=${postInfo.id - 1}" class="carousel-slide-a">
//                         <div class="carousel-slide-div carousel-slide-div--hide">
//                           <img class="img-carousel" src=${postInfo.image} alt=${postInfo.description}>
//                           <div class="slide-number-text">${slideIndex + 1}/${totalSlidesArray.length}</div>
//                           <div class="slide-title">${postInfo.title}</div>
//                         </div>
//                       </a>`;
//   return contentHtml;
// };
const createHtmlSlideCarousel = (postInfo, slideIndex, totalSlidesArray) => {
  const fragmentInside = document.createDocumentFragment();

  const carouselAnchor = document.createElement("a");
  carouselAnchor.setAttribute(
    "href",
    `"./post.html?post_id=${postInfo.id - 1}"`
  );
  carouselAnchor.classList.add("carousel-slide-a");

  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel-slide-div", "carousel-slide-div--hide");

  const carouselImage = document.createElement("img");
  carouselImage.setAttribute("src", `${postInfo.image}`);
  carouselImage.setAttribute("alt", `${postInfo.description}`);
  carouselImage.classList.add("img-carousel");

  const slideNumberDiv = document.createElement("div");
  slideNumberDiv.classList.add("slide-number-text");
  slideNumberDiv.textContent = `${slideIndex + 1}/${totalSlidesArray.length}`;

  const slideTitleDiv = document.createElement("div");
  slideTitleDiv.classList.add("slide-title");
  slideTitleDiv.textContent = `${postInfo.title}`;

  fragmentInside.append(carouselImage, slideNumberDiv, slideTitleDiv);
  carouselDiv.appendChild(fragmentInside);
  carouselAnchor.appendChild(carouselDiv);

  return carouselAnchor;
};

// const addSlideDot = () => {
//   return `<span class="dot"></span>`;
// };
const addSlideDot = () => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  return dot;
};

// postsForCarouselArr.map((slide, index, postsForCarouselArr) => {
//   carouselSlidesContainer.innerHTML += createHtmlSlideCarousel(
//     slide,
//     index,
//     postsForCarouselArr
//   );
//   carouselSlideDotsContainer.innerHTML += addSlideDot();
// });
postsForCarouselArr.map((slide, index, postsForCarouselArr) => {
  carouselSlidesContainer.appendChild(
    createHtmlSlideCarousel(slide, index, postsForCarouselArr)
  );
  carouselSlideDotsContainer.appendChild(addSlideDot());
});

const carouselSlides = document.getElementsByClassName("carousel-slide-a");

Array.prototype.forEach.call(carouselSlides, (slide) => {
  slide.addEventListener("swiped", (e) => {
    if (e.detail.dir === "left") {
      changeSlide(1);
    } else {
      changeSlide(-1);
    }
  });
});

let currentSlideIndex = 0;

const showSlides = (slideOut, current) => {
  const slides = document.getElementsByClassName("carousel-slide-div");
  const carouselImages = document.getElementsByClassName("img-carousel");
  const dots = document.getElementsByClassName("dot");

  if (current > slides.length - 1) {
    currentSlideIndex = 0;
  }

  if (current < 0) {
    currentSlideIndex = slides.length - 1;
  }

  if (slideOut === current) {
    slides[currentSlideIndex].classList.toggle(
      "carousel-slide-div--hide",
      false
    );
    carouselImages[currentSlideIndex].classList.toggle(
      "transition-slide-in",
      true
    );
    dots[currentSlideIndex].classList.toggle("dot--active", true);
  } else {
    carouselImages[slideOut].classList.toggle("transition-slide-out", true);
    setTimeout(() => {
      carouselImages[slideOut].classList.toggle("transition-slide-out", false);
      slides[slideOut].classList.toggle("carousel-slide-div--hide", true);
      dots[slideOut].classList.toggle("dot--active", false);
    }, 500);
    setTimeout(() => {
      slides[currentSlideIndex].classList.toggle(
        "carousel-slide-div--hide",
        false
      );
      carouselImages[currentSlideIndex].classList.toggle(
        "transition-slide-in",
        true
      );
      dots[currentSlideIndex].classList.toggle("dot--active", true);
    }, 500);
  }
};

const changeSlide = (n = 1) => {
  root.style.setProperty("--translate-direction", `${-n}`);
  showSlides(currentSlideIndex, (currentSlideIndex += n));
};

const currentSlide = (n) => {
  showSlides(currentSlideIndex, (currentSlideIndex = n));
};

showSlides(currentSlideIndex, currentSlideIndex);

export { changeSlide, currentSlide };
