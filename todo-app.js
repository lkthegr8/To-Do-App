'use strict'

// eposide 63 local storage deleted dummy data 
let todos = getSavedTodos()

const filters={
    searchText:"",
    hideCompleted:false
}

// initial rendering that takes place when program starts(by calling the renderTodos function)
renderTodos(todos,filters)


// eposide 55 listen for the search box text change
// eposide 57 rendering the todo filters
document.querySelector("#search-todos").addEventListener("input",(e)=>{
    filters.searchText=e.target.value
// re rendering the todos filters
    renderTodos(todos, filters)
})

// eposide 58 working with forms (hanldle the submit event to add a new todo)
document.querySelector("#new-todo").addEventListener("submit",(e)=>{
    e.preventDefault()
    todos.push({
        id : uuidv4(),
        text : e.target.elements.text.value,
        completed : false
    })

    saveTodos(todos)
    // rerender the todos after new input to the todo array
    renderTodos(todos,filters)
    // empty the input text
    e.target.elements.text.value=""
})

// eposide 59 check box and its event and filter(hide completed)
document.querySelector("#hide-completed").addEventListener("change",(e)=>{
    filters.hideCompleted=e.target.checked
    renderTodos(todos,filters)
})