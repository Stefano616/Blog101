import { postsInfoArray, postContentArray } from "./posts.js"

const categoriesArray = document.getElementsByClassName("nav-item--categories");
let postContainer = document.getElementById("postContainer");
let selectedCategoriesArray = [];

function createHtmlPostInfo(postInfo) {
    return `<div class="container card card--post">
            <img src=${postInfo.image} alt=${postInfo.description}>
            <p>${postInfo.title}</p>
            <p>${postInfo.tags}</p>
        </div>`;
}
const showPosts = (postToShow) => {
    postToShow.map((category) => {
        postsInfoArray.filter((postCategory) => postCategory.tags.includes(category)).map((post) => {
            postContainer.innerHTML += createHtmlPostInfo(post);
        })
    })
};
const loadPosts = () => {
    if (localStorage) {
        showPosts(localStorage.getItem(localStorage.key(0)).split());
        localStorage.clear();
    } else {
        let loadAllPosts = ["#all"];
        showPosts(loadAllPosts);
    }
}
const updatePosts = (e) => {
    e.preventDefault();
    selectedCategoriesArray = [];
    postContainer.innerHTML = "";
    for (let i = 0; i < categoriesArray.length; i++) {
        if (categoriesArray[i].classList.contains('selected')) {
            selectedCategoriesArray.push(categoriesArray[i].id)
        }
    }
    showPosts(selectedCategoriesArray);
};
function allSelectedtoggleCategoriesOff(e) {
    for (let i = 1; i < categoriesArray.length; i++) {
        categoriesArray[i].classList.toggle("selected", false);
    }
    categoriesArray[0].classList.toggle("selected");
    updatePosts(e);
};
for (let i = 1; i < categoriesArray.length; i++) {
    categoriesArray[i].addEventListener("click", (e) => {
        categoriesArray[i].classList.toggle("selected");
        categoriesArray[0].classList.toggle("selected", false);
        updatePosts(e);
    });
};
categoriesArray[0].addEventListener("click", (e) => allSelectedtoggleCategoriesOff(e));
loadPosts();