document.getElementById("signIn").addEventListener("click",function(){
  document.querySelector(".sign-in").style.display="flex";
});

document.querySelector(".fa-xmark").addEventListener("click",function(){
  document.querySelector(".sign-in").style.display="none"
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
 
hero=document.querySelector(".hero");
hero.onclick=function(){
  navbar=document.querySelector("nav")
  navbar.classList.toggle("active")
}