 
let all_li = document.querySelectorAll("li"); 

for (let i = 0; i < all_li.length; i++){
all_li[i].addEventListener("mouseover", function(){ 
  this.classList.add("selected"); 
}); 

all_li[i].addEventListener("mouseleave", function(){ 
    this.classList.remove("selected"); 
}); 

all_li[i].addEventListener("click", function() { 
  this.classList.toggle("done"); 
}); 

} 