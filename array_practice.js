// program for printing the same array in reverse 
let print_reverse = (array_new) => { 
array_new.reverse();   
    for(i = 0; i < array_new.length; i++) { 
     console.log(array_new[i]); 
    }
} 

print_reverse(["a","b","c","d"]); 


// program for finding identical numbers in an arry 
let identical = (array_new) => { 

    for(i = 0; i < array_new.length; i++) { 
        if (array_new[i] === array_new[0]){ 
          console.log(true); 
        }
        else console.log(false); 
    }
} 
identical([1, 1, 1, 2]); 

//program for finding the sume of all numbers in an array 

let  sumArray = (array_insert)  => { 
   let sum = array_insert.reduce((a,b) => { 
       return a + b},0); 
       console.log(sum);
   }

    

sumArray ([2, 3, 4, 5]); 

// program for finding the largest number in an array.
let max = (array_new) => { 
 let max_number = array_new.reduce((a,b) => { 
     return Math.max(a, b)});
 
 console.log(max_number);  
     }; 

        

max([6 ,4, 9, 54, -74, 23, 25]); 