import data from "./data.json" assert { type: "json" };
import {userBasket} from './userBasket.js'


let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", menuIcon);

function menuIcon() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}

////////////////////////////////////////

let minSlider = document.getElementById("min");
let maxSlider = document.getElementById("max");
let outputMin = document.getElementById("min-value");
let outputMax = document.getElementById("max-value");
outputMin.innerHTML = "$" + minSlider.value;
outputMax.innerHTML = "$" + maxSlider.value;
minSlider.oninput = function () {
  outputMin.innerHTML = this.value;
};
maxSlider.oninput = function () {
  outputMax.innerHTML = this.value;
};
// /////
// console.log('data :>> ', data);
// console.log('productList :>> ', productList);
// const checkBox14 = document.getElementById('checkBox14');
// const checkBox15 = document.getElementById('checkBox15');
// const checkBox17 = document.getElementById('checkBox17');

// console.log('checkBox13 :>> ', checkBox13.checked);

// // checkBox13.addEventListener('click', checkBox13Handler())

// function checkBox13Handler () {
//   const checkBox13 = document.getElementById('checkBox13');
//     console.log('clicked :>> ', clicked);
//     return checkBox13.checked ? !checkBox13.checked : checkBox13.checked
//   }

//   if(checkBox13.checked == true) {
//   console.log('object :>> ', checkBox13.checked);
//   copyData = data.filter(item => item.screenSize === '13.3')
// }

// console.log('copyData :>> ', copyData);
///bascet
////
const productList = document.getElementById("product-list");
let copyData = [...data];

productList.innerHTML = copyData
  .map((item) => {
    return `<div class="product-item">
    <img src=${item.img} alt='lapTop' />
    <p class="box-price-texts">${item.name}</p>
    <div class="star">
    <img src="${item.star1}">
    <img src="${item.star1}">
    <img src="${item.star1}">
    <img src="${item.star2}">
    </div>
    <p  class="product-item-text">$ ${item.price}</p>
    <del>$ ${item.del}</del>
    <button id=${item.id} class="button"
    }">Add To Card</button>
  </div>
   `;
  })
  .join("");

copyData.map((item) => {
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      Number(event.target.id) === item.id && userBasket.push(item);
      document.querySelector('#cart-count').innerHTML = userBasket.length
      localStorage.setItem('userBasket', JSON.stringify(userBasket));
    });
  });
});

// addToCardBtn.addEventListener('click', () =>{
// index=== item.id && userBasket.push({name:item.name, price: item.price, image:item.img})
// console.log('item :>> ', item);
// console.log('userBasket :>> ', userBasket);
// }

// // console.log('prodouctAddButton :>> ', prodouctAddButton);
// function  addProductToBasketArray(itemId){
// console.log(itemId);
// }
