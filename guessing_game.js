let secretNumber = 4;
// this prompt returns a string   
let stringGuess = prompt("guess a number"); 
//converts the string to a number 
let guess = Number(stringGuess); 

// convention tells us to use triple equal sign 
if(guess === secretNumber){ 
    alert("you got it right!"); 
}
//condition if the guess is too low
else if (guess < secretNumber){ 
    alert("guess is too low, guess again"); 
}
// the only other condition that exists outside of guessing right and too low 
else{ 
    alert("guess is too high, guess again"); 
}

