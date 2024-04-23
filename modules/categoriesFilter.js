// import { postsInfoArray } from "./posts.js";
// import postsDataJSON from '../posts-data.json' assert { type: 'json' };

const categoriesArray = document.getElementsByClassName('nav-item--categories');
const postContainer = document.getElementById('postCardsContainer');
let selectedCategoriesArray = [];

function createHtmlPostInfo(postInfo) {
  const contentHtml = `<a href="./post.html?post_id=${postInfo.id - 1}">
                            <div class="container card card--post">
                                <img src=${postInfo.image} alt=${postInfo.description}>
                                <p>${postInfo.title}</p>
                                <p>${postInfo.tags}</p>
                            </div>
                        </a>`;
  return contentHtml;
}
const showPosts = (postToShow) => {
  postToShow.map((category) => {
    fetch('posts-data.json')
      .then((response) => response.json())
      .then((postsDataJSON) => {
        postsDataJSON.posts
          .filter((postCategory) => postCategory.tags.includes(category))
          .map((post) => {
            postContainer.innerHTML += createHtmlPostInfo(post);
            return postContainer;
          });
      });
  });
};
const loadPosts = () => {
  if (!localStorage.key(0)) {
    let loadAllPosts = ['#all'];
    showPosts(loadAllPosts);
  } else {
    let initialCategoryArray = localStorage
      .getItem(localStorage.key(0))
      .split();
    let initialCategoryIndex = Number(localStorage.key(0)) + 1;
    showPosts(initialCategoryArray);
    toggleSelectedCategoriesOn(initialCategoryIndex);
    localStorage.clear();
  }
};
const updatePosts = (e) => {
  e.preventDefault();
  selectedCategoriesArray = [];
  postContainer.innerHTML = '';
  for (let i = 0; i < categoriesArray.length; i++) {
    if (categoriesArray[i].classList.contains('selected')) {
      selectedCategoriesArray.push(categoriesArray[i].id);
    }
  }
  showPosts(selectedCategoriesArray);
};
function allSelectedtoggleCategoriesOff(e) {
  for (let i = 1; i < categoriesArray.length; i++) {
    categoriesArray[i].classList.toggle('selected', false);
  }
  categoriesArray[0].classList.toggle('selected');
  updatePosts(e);
}
const toggleSelectedCategoriesOn = (index) => {
  categoriesArray[index].classList.toggle('selected');
  categoriesArray[0].classList.toggle('selected', false);
};
for (let i = 1; i < categoriesArray.length; i++) {
  categoriesArray[i].addEventListener('click', (e) => {
    toggleSelectedCategoriesOn(i);
    updatePosts(e);
  });
}
categoriesArray[0].addEventListener('click', (e) =>
  allSelectedtoggleCategoriesOff(e),
);
loadPosts();
