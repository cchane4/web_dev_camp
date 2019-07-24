/*program for printing the same array in reverse 
array length is one greater than the greatest index 
so we start at the greatest index (hence -1) and increment backwards 
until we get to the index of 0 */ 

let print_reverse = (array_new) => { 
    for (let i = array_new.length -1; i >= 0; i--){
     console.log(array_new[i]); 
    } 
} 

//test these out
print_reverse(["a","b","c","d"]); 


/* program for finding identical numbers in an array 
stor the value of the first number in the variable first element 
loop through the array and if any index of the array is not strictly 
identical to the first element, shortcircuit and stop the program by returning false
otherwise keep going and check all of other numbers and return true if true. */
 let identical = (array_new) => { 
    let first_element = array_new[0]; 
    for( let i = 0; i < array_new.length; i++) { 
        
        if (array_new[i] !== first_element){ 
          return false; 
        }
    } 
   return true;  
} 
//test these out. 
identical([1,2,1,1,5]); 
identical([2,2,2,2,2,2]); 

/*make variable to hold the total starting off at 0. 
loop through the array and add each value to the total overall 
until you reach the end of the array. then return the final total. */


let sumArray = (arr) => { 
    let total = 0; 
    arr.forEach((value) => { 
        total +=  value; 
    }); 
    return total; 
}

sumArray([2,3,4,5]); 



/* make a variable to hold the first item of the array 
and set it as the current maximum. loop through the array 
and if any item in the array is more than the maximum, 
make the max item equal to the item in the array */ 

let max = (arr) => { 
  let maximum_item = arr[0];
  for(i = 0; i < arr.length; i++) { 
      if (arr[i] > maximum_item){ 
          maximum_item = arr[i]; 
      }
  }
 return maximum_item;    
}

max([1,3,5,6,-8,10]); 

