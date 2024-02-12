import { postsInfoArray, postContentArray } from "./posts.js";
const postContainer = document.getElementById("post-container");
const postImage = document.getElementById("post-image")

const createHtmlPost = (postInfo, postContent) => {
    return `<h2>${postInfo.title}</h2>
            <div>
                <p>${postContent.content}</p>
            </div>`
}

const displayPost = () => {
    let postId = new URLSearchParams(window.location.search).get("post_id");
    postImage.setAttribute("src", postsInfoArray[postId].image)
    postContainer.innerHTML += createHtmlPost(postsInfoArray[postId], postContentArray[postId]);
}
displayPost()
