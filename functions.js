//function to find even or odd numbers
let isEven = (num) => { 
    if (num%2 === 0) { 
        return (true) 
    }
    return(false); 
}

/* the above function can also be rewritten as 
let isEven = (num) => { 
    return (num%2 === 0) 

this works because the return statement equals a boolean evaluation 
so the ouput will by default be true or false
*/ 


//function to find factorials 
let factorial = (num) => { 
    if( num === 0) { 
        return 1; 
    }
    return num * factorial(num - 1); 
}
/* the long way to do write the factorial function 
 let factorial = (num) => { 
     // define a result variable 
     let result = 1; 
     // calculate the factor and stor the variable
     for (let i = 2; i <= num ; i++){ 
         result = result * i; 
     }
     // output the result variable
     return result
 }

// find all occurences of  a hyphen and replace with underscores
let kebabToSnake = (word) => { 
    return word.replace( /-/g,"_"); 

}

