import { postsInfoArray, postContentArray } from "./posts.js"

const categoriesArray = document.getElementsByClassName("nav-item--categories");
let postContainer = document.getElementById("postContainer");

function createHtmlPostInfo(postInfo) {
    return `<div class="container card card--post">
            <img src=${postInfo.image} alt=${postInfo.description}>
            <p>${postInfo.title}</p>
        </div>`;
}

let selectedCategoriesArray = [];

for (let i = 0; i < categoriesArray.length; i++) {
    if (categoriesArray[i].classList.contains('selected')) {
        selectedCategoriesArray.push(categoriesArray[i].id)
    }
}
let selectedCategoies = `"${selectedCategoriesArray.join('","')}"`;
console.log(selectedCategoies);

postsInfoArray.filter((el) => el.tags.includes("#activities", "#fitness")).map((post) => postContainer.innerHTML += createHtmlPostInfo(post));
