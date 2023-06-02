function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))

}


function displayPhotos(data) {
    const photosBox = document.getElementById('photos')
    for (const photo of data) {
        const div = document.createElement('div')
        div.classList.add('photos')
        div.innerHTML = `
        <h3>AlbumId:${photo.albumId}</h3>
        <h3>ID:${photo.id}</h3>
        <h3>Title:${photo.title}</h3>
        <img class:"images" src=${photo.url}"/>
        <h3>ThumbnailUrl:${photo.thumbnailUrl}</h3>
        `
        photosBox.appendChild(div)
        // prepend

    }
}

loadPhotos()