function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))

}


function displayAlbum(data) {
    const albumBox = document.getElementById('album')
    for (const album of data) {
        const div = document.createElement('div')
        div.classList.add('album')
        div.innerHTML = `
        <h3>UserId:${album.userId}</h3>
        <h3>ID:${album.id}</h3>
        <h3>Title:${album.title}</h3>
       
        `
        albumBox.appendChild(div)
        // prepend

    }
}

loadAlbum()