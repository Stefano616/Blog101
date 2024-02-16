import { postContentArray } from "./posts.js";
import postsDataJSON from "../posts-data.json" assert {type: 'json'};

const postContainer = document.getElementById("post-container");
const postImage = document.getElementById("post-image")

const createHtmlPost = (postData, postContent) => {
    return `<h2>${postData.title}</h2>
            <div>
                <p>${postContent.content}</p>
            </div>`
}

const displayPost = () => {
    let postId = new URLSearchParams(window.location.search).get("post_id");
    postImage.setAttribute("src", postsDataJSON.posts[postId].image)
    postContainer.innerHTML += createHtmlPost(postsDataJSON.posts[postId], postContentArray[postId]);
}
displayPost()
