import { changeSlide, currentSlide } from "./modules/slideshow.js";

const btnChangeSlidePrev = document.getElementsByClassName("btn-change-slide")[0];
const btnChangeSlideNext = document.getElementsByClassName("btn-change-slide")[1];
const dotChangeSlideArr = document.getElementsByClassName("dot");
const categoriesCards = document.getElementsByClassName("card");

for (let i = 0; i < categoriesCards.length; i++) {
    categoriesCards[i].addEventListener("click", () => {
        localStorage.setItem(`${i}`, categoriesCards[i].id);
        console.log(categoriesCards[i].id)
    })
}

btnChangeSlidePrev.addEventListener("click", () => changeSlide(-1));
btnChangeSlideNext.addEventListener("click", () => changeSlide(1));

dotChangeSlideArr[0].addEventListener("click", () => currentSlide(1));
dotChangeSlideArr[1].addEventListener("click", () => currentSlide(2));
dotChangeSlideArr[2].addEventListener("click", () => currentSlide(3));
