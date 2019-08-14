//a function takes in the array and an anonymous function as arguments
let myForEach = (arr, func)=> {
    // loop through the array 
    for (i = 0; i < arr.length; i++){
        // call func for each item in array
    func(arr[i]);
    } 
}

let colors = ["red", "yellow","blue"]; 

// color refers to each item in the array
 myForEach (colors, (color) => { 
    console.log(color); 

}); 



/*here is what you are actually doing in heightened
javascript language terms */

// Array.prototype.myForEach = (func) => { 
//     for (let i = 0; i < this.length; i++){ 
//         func(this[i]); 
//     }
// }

