// print all numbers between -10 and 19 

let count  = -10; 
while (count < 20){ 
    console.log(count); 
    count++
} 

//print all even numbers between 10 an 40
let count  = 10; 
while (count <= 40){ 
    console.log(count); 
    count+=2
}

// another way of printing all even numbers between 10 and 40 
let count  = 10; 
while (count <=40){  
    if (count%2 == 0){
    console.log(count); 
    }
    count++
}
//print all odd numbers between 300 and 333
let count  = 301 ;
while (count <=333){  
    if (count%2 !== 0){
    console.log(count); 
    }
    count++
}


// print all numbers divisible by 5 and 3 that are between 5 and 50
let count  = 5; 
while (count <=50){
    if (count%3 == 0 && count%5 == 0 ) {
    console.log(count); 
    }
    count++
}

