function loadTodos() {
   fetch("https://jsonplaceholder.typicode.com/todos")
     .then((res) => res.json())
     .then((data) => displayTodos(data));
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container')
    for(const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo")
        todoDiv.innerHTML = `
           <h3>User Id: ${todo.userId}</h3>
           <h2>Id: ${todo.id}</h2>
           <h3>Title: ${todo.title}</h3>
           <h4>Completed: ${todo.completed}</h4>
        `
        todoContainer.appendChild(todoDiv)
    }
}

loadTodos();