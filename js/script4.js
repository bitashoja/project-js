let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",menuIcon);

function menuIcon(){
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if( nav.classList.contains("open")){
      nav.style.maxHeight=nav.scrollHeight+"px";
    }else{
      nav.removeAttribute("style");
    }
  }
  
  //////
  let Icone=document.querySelector("#icone-buy");
  const slider=document.querySelector(".slier");
  Icone.addEventListener('click',slide);
  function slide(){
     if(slide.classList="active"){
      slider.style.display='block';
     }else{
      slider.style.display='none';
     }}
