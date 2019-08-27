let button_click = document.querySelector("button");
let is_green = false;

 button_click.addEventListener("click", function(){ 
     if (is_green){ 
         document.body.style.background = "yellow"; 
     }else { 
    document.body.style.background = "green"; 
     } 
     is_green =! is_green; 
});
