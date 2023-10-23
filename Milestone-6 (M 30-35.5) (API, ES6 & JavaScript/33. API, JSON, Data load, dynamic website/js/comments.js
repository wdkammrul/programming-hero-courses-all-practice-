function loadComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => displayComments(data));
}

function displayComments(comments){
    const commentContainer = document.getElementById("comment-container");
    // console.log(commentContainer)
    for(const comment of comments){
    
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
           <h3>Post Id: ${comment.postId} </h3>
           <h3>Id: : ${comment.id} </h3>
           <h3>Name: : ${comment.name} </h3>
           <h3>Body: : ${comment.body} </h3>

           
        `
        commentContainer.appendChild(commentDiv);

    }
}

loadComments();