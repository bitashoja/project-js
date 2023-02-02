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
  //////////////
  let laptop1= document.querySelector("#box-right-img1")
let laptop2= document.querySelector("#box-right-img2");
let laptop3= document.querySelector("#box-right-img3");
let laptop4= document.querySelector("#box-right-img4");
let laptop5= document.querySelector("#box-right-img5");
let laptop6= document.querySelector("#box-right-img6");
let slide1= document.querySelector("#box-right-slider1")
let slide2= document.querySelector("#box-right-slider2");
let slide3= document.querySelector("#box-right-slider3");
let slide4= document.querySelector("#box-right-slider4");
let slide5= document.querySelector("#box-right-slider5");
let slide6= document.querySelector("#box-right-slider6");
const page1 =  document.getElementById('page1');
const page2 =  document.getElementById('page2');
const page3 =  document.getElementById('page3');
const page4 =  document.getElementById('page4');
const page5 =  document.getElementById('page5');
const page6 =  document.getElementById('page6');

laptop1.addEventListener('click',function(){
  console.log("object");
  page1.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
laptop2.addEventListener('click',function(){
  page2.classList.add('active')
  page1.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
laptop3.addEventListener('click',function(){
  page3.classList.add('active')
  page2.classList.remove('active')
  page1.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
laptop4.addEventListener('click',function(){
  page4.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page1.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
laptop5.addEventListener('click',function(){
  page5.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page1.classList.remove('active')
  page6.classList.remove('active')
});
laptop6.addEventListener('click',function(){
  page6.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page1.classList.remove('active')
});
//

slide1.addEventListener('click',function(){
  console.log("object");
  page1.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
slide2.addEventListener('click',function(){
  page2.classList.add('active')
  page1.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
slide3.addEventListener('click',function(){
  page3.classList.add('active')
  page2.classList.remove('active')
  page1.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
slide4.addEventListener('click',function(){
  page4.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page1.classList.remove('active')
  page5.classList.remove('active')
  page6.classList.remove('active')
});
slide5.addEventListener('click',function(){
  page5.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page1.classList.remove('active')
  page6.classList.remove('active')
});
slide6.addEventListener('click',function(){
  page6.classList.add('active')
  page2.classList.remove('active')
  page3.classList.remove('active')
  page4.classList.remove('active')
  page5.classList.remove('active')
  page1.classList.remove('active')
});
