const todos=[{
    text:"six of crows",
    completed:false
},{
    text:"When only love remains",
    completed:true
},{
    text:"defient queen",
    completed:false
}]

const filters={
    searchText:""
}


// eposide 57 render function
const renderTodos = function(todos,filter){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    })
// shifting this function (used to get how many todos left) inside to combine it with filter
    const incompleteTodos=filteredTodos.filter(function(todo){
        return !todo.completed
    })
// clear off the previous data inside the div for new data 
document.querySelector("#todos").innerHTML=""

// shifting this function (used to show how many todos left inside html) inside to combine it with filter
    const summary = document.createElement("h2")
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector("#todos").appendChild(summary)

// displaying the filtered todos in the div
// foreach loop
filteredTodos.forEach(function(todo){
    const p=document.createElement("p")
    p.textContent=todo.text
    document.querySelector("#todos").appendChild(p)
})

}

// initial rendering that takes place when program starts(by calling the renderTodos function)
renderTodos(todos,filters)


// eposide 55 listen for the search box text change
// eposide 57 rendering the todo filters
document.querySelector("#search-todos").addEventListener("input",function(e){
    filters.searchText=e.target.value
// re rendering the todos filters
    renderTodos(todos, filters)
})

// eposide 58 working with forms (hanldle the submit event to add a new todo)
document.querySelector("#new-todo").addEventListener("submit",function(e){
    e.preventDefault()
    todos.push({
        text : e.target.elements.text.value,
        completed : false
    })
    // rerender the todos after new input to the todo array
    renderTodos(todos,filters)
    // empty the input text
    e.target.elements.text.value=""
})