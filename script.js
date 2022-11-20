const menuItemIcon =document.querySelector(".menu-item");
const menuTag =document.querySelectorAll(".menu");
const closeIcon =document.querySelector(".x-mark")
const navTag =document.querySelector(".nav-container")
let isOpening=false

menuItemIcon.addEventListener("click",function(){
    if(isOpening ==false){
        menuItemIcon.style.display ="none"
        closeIcon.style.display="block"
        
        menuTag.forEach((menu)=>{
            menu.style.display="block"
            
        })
        isOpening =true
        
        
       
        
    }

    if(isOpening == true){
        closeIcon.addEventListener("click",function(){
           
            closeIcon.style.display="none"
            menuItemIcon.style.display ="block"
            
    
            menuTag.forEach((menu)=>{
                menu.style.display="none"
               
                
            })
            isOpening=false
           })
    }



    
})




