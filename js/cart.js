import data from "./data.json" assert { type: "json" };

const userBasket = JSON.parse( localStorage.getItem("userBasket"))
 

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".price-num");
let a = 1;

 
let copyData = [...data];
document.getElementById("product-list").innerHTML = userBasket
  .map((item) => {
    console.log("object");
    return `  <div class="main-box-shop">
                  div class="main-box-header">YOUR CART</div>
            <div class="main-box">
              <div class="main-img">
                <img src="${item.img}" alt="labtop"
              /></div>
              <div class="main-texts">
                <div class="main-text">
                  <p>${item.name}</p>
                  <p>${item.color}</p>
                  <span>$${item.price}</span>
                </div>
                <div class="icone-buy">
                  <div class="plus">+</div>
                  <div class="num">1</div>
                  <div class="minus">-</div>
                </div>
              </div>
            </div>
            </div>
`;
  })
  .join("");



plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});
//

let i = 1;
plus2.addEventListener("click", () => {
  i++;
  i = i < 10 ? "0" + i : i;
  num2.innerText = i;
});
minus2.addEventListener("click", () => {
  if (i > 1) {
    i--;
    i = i < 10 ? "0" + i : i;
    num2.innerText = i;
  }
});