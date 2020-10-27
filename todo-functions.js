// fetching existing data from local storage
const getSavedTodos = function(){
    // getting data from local storage
    const todosJSON = localStorage.getItem("todos")

    // check if local storage is already set or not
    if (todosJSON != null) {
        return JSON.parse(todosJSON)
    }else{
        return []
    }
}

// save todos to local storage
const saveTodos = function(todos){
    // storing the todos in local storage
    localStorage.setItem("todos",JSON.stringify(todos))
}


// render application todos based on filters
// eposide 57 render function
const renderTodos = function (todos, filter) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    // eposide 59 implementing the hide completed todos by refiltering the filteredTodos
    filteredTodos = filteredTodos.filter(function (todo) {
        if (filter.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })


    // shifting this function (used to get how many todos left) inside to combine it with filter
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    // clear off the previous data inside the div for new data 
    document.querySelector("#todos").innerHTML = ""

    // shifting this function (used to show how many todos left inside html) inside to combine it with filter
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos))

    // displaying the filtered todos in the div
    // foreach loop
    filteredTodos.forEach(function (todo) {
        document.querySelector("#todos").appendChild(generateTodoDOM(todo))
    })

}

// function to remove a todo
const removeTodos = function(id){
    // check if sent uuid is available
    const todoIndex = todos.findIndex(function(todo){
        return todo.id == id
    })
    // remove the todo if uuid is available
    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}


// get dom elements for an individual note
const generateTodoDOM = function(todo){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // set input to check box
    checkbox.setAttribute('type','checkbox')
    todoEl.appendChild(checkbox)

    // set up the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // set up the remove button
    removeButton.textContent = "x"
    todoEl.appendChild(removeButton)

    // add event listener to button to delete the todos
    removeButton.addEventListener("click",function(){
        removeTodos(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    return todoEl
}


// get the dom elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement("h2")
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    return summary
}
