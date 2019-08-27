let button_click = document.querySelector("button");
let is_green = false;

 button_click.addEventListener("click", function(){ 
     if (is_green){ 
         document.body.style.background = "yellow"; 
        is_green = false; 
     }else { 
    document.body.style.backgroundColor = "green";
    is_green = true;  
     } 
});
