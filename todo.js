let todos = ["Buy some apples"]; 
let input = prompt("What would you like to do?"); 
/* if the input from the prompt is evaluated and found to equal the string "list"
then, it should print to the console whatever is in the todos array */
if (input === "list"){ 
    console.log(todos); 
}
//this is the logic for adding a new todo to the list
else if (input === "new"){ 
   let newTodo = prompt('Add a new todo to the list'); 
   todos.push(newTodo); 
}