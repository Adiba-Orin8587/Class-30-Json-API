// const user = {
//     name: 'Anahita',
//     age: 15,
//     id: 02
// }

// const stringify = JSON.stringify(user)
// console.log(stringify);


// const dress = {
//     name: 'floral kurti',
//     wholesaler: {
//         cost: 1500,
//         buyFrom: 'factori',

//     },
//     customer: {
//         price: 2500,
//         colour: 'black',
//         shape: {
//             size: 'xl',
//             height: 48,
//         }
//     }
// }

// const largeObject = JSON.stringify(dress)
// console.log(largeObject);

// const convert = JSON.parse(largeObject)
// console.log(convert);


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}


function loaderPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => console.log(json))
}


function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))

}


function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))

}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))

}


function displayUser(users) {
    const ul = document.getElementById('user')
    for (const user of users) {
        console.log(user);
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))

}


function displayPost(posts) {
    for (const post of posts) {
        console.log(post);
    }
}


function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))
}

function displayComment(comments) {
    for (const comment of comments) {
        console.log(comment);
    }
}
function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => displayAlbum(data))
}

function displayAlbum(albums) {
    for (const album of albums) {
        console.log(album);
    }
}

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
}


function displayTodos(todos) {
    for (const todo of todos) {
        console.log(todo);
    }
}


function loaderPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhotos(data))
}


function displayPhotos(photos) {
    for (const photo of photos) {
        console.log(photo);

    }
}


