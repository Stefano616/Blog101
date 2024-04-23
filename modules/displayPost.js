import { postContentArray } from './posts.js';
import postsDataJSON from '../posts-data.json' with { type: 'json' };

const postContainer = document.getElementById('post-container');
const postImage = document.getElementById('post-image');

const createHtmlPost = (postData, postContent) => {
  const contentHtml = `<h2>${postData.title}</h2>
                            <div>
                              <p>${postContent.content}</p>
                            </div>`;
  return contentHtml;
};

const displayPost = () => {
  const postId = new URLSearchParams(window.location.search).get('post_id');
  // fetch('../posts-data.json')
  //   .then((response) => response.json())
  //   .then((postsDataJSON) => {
  //     postImage.setAttribute('src', postsDataJSON.posts[postId].image);
  //     postContainer.innerHTML += createHtmlPost(
  //       postsDataJSON.posts[postId],
  //       postContentArray[postId],
  //     );
  //   });
  postImage.setAttribute('src', postsDataJSON.posts[postId].image);
  postContainer.innerHTML += createHtmlPost(
    postsDataJSON.posts[postId],
    postContentArray[postId],
  );
};
displayPost();
