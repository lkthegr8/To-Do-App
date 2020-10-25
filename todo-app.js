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



const incompleteTodos=todos.filter(function(todo){
    return !todo.completed
})
const summary=document.createElement("h2")
summary.textContent=`you have ${incompleteTodos.length} todos left`
document.querySelector("body").appendChild(summary)

// foreach loop
todos.forEach(function(todo){
    const p=document.createElement("p")
    p.textContent=todo.text
    document.querySelector("body").appendChild(p)
})



// eposide 53 listen for new todo creation
document.querySelector("button").addEventListener('click',function(e){
    console.log("add a new todo...")
})