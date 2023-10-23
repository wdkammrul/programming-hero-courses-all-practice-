function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

/* 
কোনো একটা ইলিমেন্টের মধ্যে ইলিমেন্ট অ্যাড করার স্টেপগুালো হলো । 
1. get the container element where you want to add the new elements
2. create child element 
3. set innerHtml or innerText 
4. appendChild
*/

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    console.log(post);
    postDiv.innerHTML = `
            <h4>UserId-${post.userId}</h4>
            <h5>Id-${post.id}</h5>
            <h4>Title:${post.title}</h4>
            <p>Body: ${post.body}</p>
        `;
    postsContainer.appendChild(postDiv);
  }
}

loadPosts();

