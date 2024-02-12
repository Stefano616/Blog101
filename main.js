import { changeSlide, currentSlide } from "./modules/slideshow.js";

const [btnChangeSlidePrev, btnChangeSlideNext] = document.getElementsByClassName("btn-change-slide");
const dotChangeSlideArr = document.getElementsByClassName("dot");
const categoriesCards = document.getElementsByClassName("card");
const transitionSlides = document.getElementsByClassName("transition-slide");

// const postIndexCarusel = [3, 1, 0];

// for (let i = 0; i < transitionSlides.length; i++) {
//     transitionSlides[i].addEventListener("click", () => {
//         window.location.replace(post.html ? post_id = `${postIndexCarusel[i]}`);
//     })
// }

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
