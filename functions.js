//function to find even or odd numbers
let isEven = (num) => { 
    if (num%2 === 0) { 
        return (true) 
    }
    return(false); 
}


//function to find factorials 
let factorial = (num) => { 
    if( num === 0) { 
        return 1; 
    }
    return num * factorial(num - 1); 
}

// find all occurences of  a hyphen and replace with underscores
let kebabToSnake = (word) => { 
    return word.replace( /-/g,"_"); 

}

