let todos = ["Buy some apples"]; 
let input = prompt("What would you like to do?"); 
/* if the input from the prompt is evaluated and found to equal the string "list"
then, it should print to the console whatever is in the todos array */
if (input === "list"){ 
    console.log(todos); 
}
//this is the logic for adding a new todo to the list
/* if new is typed in the original prompt, prompt again to add a new todo to the list
then push that typed item to the todos array*/
else if (input === "new"){ 
   let newTodo = prompt('Add a new todo to the list'); 
   todos.push(newTodo); 
}




/*condition for the prompt to be repeated as long as 
the input is not equal to quit */ 
while(input !== "quit"){ 
//handle input 
//ask again for new input
}
console.log("ok, you quit the application"); 