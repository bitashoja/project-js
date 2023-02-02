let menu= document.querySelector(".ul")
let menuBtn=document.querySelector(".header-icon")
let menuBtnIcon=document.querySelector(".header-icon i")

menuBtn.addEventListener( "click",function(){
  if(menuBtnIcon.classList.contains("fa-bars")){
menu.style.left="0"
menuBtnIcon.classList="fa fa-times"
  } else{
    menu.style.left="-256px"
    menuBtnIcon.classList="fa fa-bars"
  }
});
//
let MacbookPro= document.querySelector(".macbook-pro")
let Sumsong= document.querySelector(".sumsong");
let Iphone= document.querySelector(".iphone");
let slide1= document.querySelector("#box-right-slider1")
let slide2= document.querySelector("#box-right-slider2");
let slide3= document.querySelector("#box-right-slider3");
const lapTop =  document.getElementById('lapTop');
const monitor =  document.getElementById('monitor');
const mobile =  document.getElementById('mobile');

MacbookPro.addEventListener('click',function(){
  lapTop.classList.add('active')
 mobile.classList.remove('active')
 monitor.classList.remove('active')
});

Iphone.addEventListener('click',function(){
  mobile.classList.add('active')
  lapTop.classList.remove('active')
 monitor.classList.remove('active')
});

Sumsong.addEventListener('click',function(){
  monitor.classList.add('active')
 mobile.classList.remove('active')
 lapTop.classList.remove('active')
});
//
slide1.addEventListener('click',function(){
  lapTop.classList.add('active')
 mobile.classList.remove('active')
 monitor.classList.remove('active')
});

slide3.addEventListener('click',function(){
  mobile.classList.add('active')
  lapTop.classList.remove('active')
 monitor.classList.remove('active')
});

slide2.addEventListener('click',function(){
  monitor.classList.add('active')
 mobile.classList.remove('active')
 lapTop.classList.remove('active')
});
//mobile
const thumbnail= document.getElementsByClassName("main-bottom-mobile");
const slider=document.getElementById("slider");
let next=document.getElementById("next");
let prev=document.getElementById("prev");
prev.addEventListener("click",()=>{
  slider.scrollLeft-=125;
});
next.addEventListener("click",()=>{
  slider.scrollLeft+=125;
});
const maxscrollleft = slider.scrollWidth- slider.clientWidth;

function autoplay(){
  if (slider.scrollLeft>(maxscrollleft - 1)){
    slider.scrollLeft-=maxscrollleft;
  }else{
    slider.scrollLeft+=1;
  }
};
let play = setInterval(autoplay , 50);

for( let i=0 ; i<thumbnail.length;i++){
  thumbnail[i].addEventListener("mouseover",()=>{
    clearInterval(play)
  })
  thumbnail[i].addEventListener("mouseout",()=>{
    return play = setInterval(autoplay,50);
  })
};
//main
let priceMonitor = document.querySelector (".priceMonitor");
let priceKeboord = document.querySelector(".priceKeboord");
let priceMobile = document.querySelector(".priceMobile");
let pricelabtop = document.querySelector(".pricelabtop");
let tabelleftbox1= document.getElementById("tabel-left-box1");
let tabelleftbox2= document.getElementById("tabel-left-box2");
let tabelleftbox3= document.getElementById("tabel-left-box3");
let tabelleftbox4= document.getElementById("tabel-left-box4");
let Slider = document.querySelector(".tabel-left-box ")
let logoMonitor = document.querySelector(".logoMonitor");
let logoKeboord = document.querySelector(".logoKeboord");
let logoMobile = document.querySelector(".logoMobile");
let logolabtop = document.querySelector(".logolabtop");


function displayNone(){
  for(let i = 0 ; i < Slider.length ; i++){
      Slider[i].style.display = 'none';
  }
}

function noActive() {
  for(let i = 0 ; i <Slider.length ; i++){
      Slider[i].classList.remove('active');
  }
}

logoMonitor.addEventListener("click",()=>{
  noActive();
  displayNone();
  tabelleftbox4.classList.add('active')
  tabelleftbox1.classList.remove('active')
  tabelleftbox2.classList.remove('active')
  tabelleftbox3.classList.remove('active')

});

logoKeboord.addEventListener("click",()=>{
  noActive();
  displayNone();
  tabelleftbox3.classList.add('active')
  tabelleftbox1.classList.remove('active')
  tabelleftbox2.classList.remove('active')
  tabelleftbox4.classList.remove('active')

});

logoMobile.addEventListener("click",()=>{
  noActive();
  displayNone();
  tabelleftbox1.classList.add('active')
  tabelleftbox2.classList.remove('active')
  tabelleftbox3.classList.remove('active')
  tabelleftbox4.classList.remove('active')
});

logolabtop.addEventListener("click",()=>{
  noActive();
  displayNone();
  tabelleftbox2.classList.add('active')
  tabelleftbox1.classList.remove('active')
  tabelleftbox3.classList.remove('active')
  tabelleftbox4.classList.remove('active')

});

logoMonitor.addEventListener('mouseenter' , () => {
  priceMonitor.style.display = 'block';
})
logoMonitor.addEventListener('mouseout' , () => {
  priceMonitor.style.display = 'none';
})

logoKeboord.addEventListener('mouseenter' , () => {
  priceKeboord.style.display = 'block';
})
logoKeboord.addEventListener('mouseout' , () => {
  priceKeboord.style.display = 'none';
})

logoMobile.addEventListener('mouseenter' , () => {
  priceMobile.style.display = 'block';
})
logoMobile.addEventListener('mouseout' , () => {
  priceMobile.style.display = 'none';
})

logolabtop.addEventListener('mouseenter' , () => {
  pricelabtop.style.display = 'block';
})
logolabtop.addEventListener('mouseout' , () => {
  pricelabtop.style.display = 'none';
})






//laptop

let thumb = document.getElementsByClassName("container-top-laptop");
let slide= document.getElementById("slide");
let buttonRight= document.getElementById("bottom-right");
let buttonLeft=document.getElementById("bottom-left");
buttonLeft.addEventListener("click",()=>{
  slide.scrollLeft-=125;
});
buttonRight.addEventListener("click",()=>{
  slide.scrollLeft+=125;
});
const maxscroll = slide.scrollWidth - slide.clientWidth;

function auto(){
  if(slide.scrollLeft>(maxscroll-1)){
    slide.scrollLeft-=125;
  }else{
    slide.scrollLeft+=1;
  }
};
let pla = setInterval(auto , 50);

for( let i=0 ; i<thumb.length;i++){
  thumb[i].addEventListener("mouseover",()=>{
    clearInterval(pla)
  })
  thumb[i].addEventListener("mouseout",()=>{
    return pla = setInterval(auto,50);
  })
};