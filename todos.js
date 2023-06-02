function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))

}


function displayTodos(data) {
    const todosBox = document.getElementById('todos')
    for (const todos of data) {
        const div = document.createElement('div')
        div.classList.add('todos')
        div.innerHTML = `
        <h3>UserId:${todos.userId}</h3>
        <h3>ID:${todos.id}</h3>
        <h3>Title:${todos.title}</h3>
        <h3>Completed:${todos.completed}</h3>
        `
        todosBox.appendChild(div)
        // prepend

    }
}

loadTodos()