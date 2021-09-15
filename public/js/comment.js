// const { Blog } = require("../../models");

const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const message = document.querySelector('#comment-desc').value.trim();
    const blog_id = document.querySelector('.blogName').getAttribute("data-post");
    if (message, blog_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({message, blog_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create comment');
      }
    }
  };


  

function formVisibityHandler(){
    let el = document.querySelector('.blog-comment-form');
    el.style.visibility = "visible";
    let addComment = document.querySelector(".addComment");
    addComment.style.visibility = "hidden";
    
}
    document
  .querySelector('.btn')
  .addEventListener('click', newCommentHandler);

 let visi = document
  .querySelector('.addComment');

 visi.addEventListener('click', formVisibityHandler);