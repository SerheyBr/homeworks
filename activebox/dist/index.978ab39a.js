const swiper=new Swiper(".citations-slider",{pagination:{el:".swiper-pagination",clickable:!0}}),btn=document.querySelector(".burger"),header=document.querySelector(".header"),body=document.querySelector("body");btn.addEventListener("click",(()=>{btn.classList.toggle("active"),header.classList.toggle("active"),body.classList.toggle("active")}));