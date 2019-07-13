 
window.setTimeout(() =>  { 

    let todos = ["Buy some apples"]; 
    let input = prompt("What would you like to do?");

let listTodos = () => { 
    console.log("********"); 
    // now printing the index 
    todos.forEach((todo_item, index) => { 
        console.log(index + ": " + todo_item); 
    }); 
    console.log("********"); 
 }

 let addTodos = () => { 
    let newTodo = prompt('Add a new todo to the list'); 
    todos.push(newTodo); 
    console.log("todo has been added"); 
 }

 let deleteTodos = () => { 
    let typeIndex = prompt("What is the index of the todo to be deleted?"); 
    todos.splice(typeIndex, 1); 
    console.log("todo has been deleted"); 

 }

    while(input !== "quit"){ 
        if (input === "list"){ 
        listTodos();
        }
        else if (input === "new"){ 
         addTodos();    
        }
        else if(input === "delete"){ 
        deleteTodos(); 
        }
    input = prompt("What would you like to do?"); 
    }
console.log("ok, you quit the application"); 

})

