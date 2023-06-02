function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))

}


function displayComment(data) {
    const commentBox = document.getElementById('comment')
    for (const comment of data) {
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
            <h3>UserId:${comment.userId}</h3>
            <h3>ID:${comment.id}</h3>
        <h3>Name:${comment.name}</h3>
        <h3>Email:${comment.email}</h3>
        <p>Body:${comment.body}</p>
        `
        commentBox.appendChild(div)
        // prepend

    }
}

loadComment()