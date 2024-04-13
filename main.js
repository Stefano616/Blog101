import { changeSlide, currentSlide } from './modules/slideshow.js';

const [btnChangeSlidePrev, btnChangeSlideNext] =
  document.getElementsByClassName('btn-change-slide');
const [areaChangeSlidePrev, areaChangeSlideNext] =
  document.getElementsByClassName('change-slide-area');
const dotChangeSlideArr = document.getElementsByClassName('dot');
const categoriesCards = document.getElementsByClassName('card');

for (let i = 0; i < categoriesCards.length; i++) {
  categoriesCards[i].addEventListener('click', () => {
    localStorage.setItem(`${i}`, categoriesCards[i].id);
  });
}

btnChangeSlidePrev.addEventListener('click', () => changeSlide(-1));
areaChangeSlidePrev.addEventListener('click', () => changeSlide(-1));
btnChangeSlideNext.addEventListener('click', () => changeSlide(1));
areaChangeSlideNext.addEventListener('click', () => changeSlide(1));

Array.prototype.forEach.call(dotChangeSlideArr, (dot, index) =>
  dot.addEventListener('click', () => currentSlide(index)),
);

setInterval(changeSlide, 6000);
