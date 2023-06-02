function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))

}


function displayPost(data) {
    const postBox = document.getElementById('post')
    for (const post of data) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>UserId:${post.userId}</h3>
        <h3>ID:${post.id}</h3>
        <h3>Title:${post.title}</h3>
        <p>Body:${post.body}</p>
        `
        postBox.appendChild(div)
        // prepend

    }
}

loadPost()