const menuList = document.querySelector(".box2__box");
const cartList = document.querySelector(".meal2__list");
const subtotal = document.querySelector(".subtotal");
const meal2__textBox = document.querySelector(".meal2__textBox");
const audio = document.querySelector(".audio");

let total = 0;
let newPizzaArray = [];
//chap tomonga qo'shilishi added

burgerArray.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
     <div class="card">
        <img src="${item.imgUrl}" class="meal2__img2">
        <span class="box2__price">${item.price}₽</span>
        <p class="box2__text">${item.name}</p>
        <span class="box2__span">${item.gram}г</span>
        <button class="box2__btn" onclick="addItemArray(${item.id})">Добавить</button>
     </div>
    `;
  
    menuList.appendChild(card);
});
  // let span = document.createElement("span");
  // span.className = "meal2__span";
  // span.innerHTML = `<span class="meal2__span">${count.length}</span>`;
  // meal2__textBox.appendChild(span);

  function addItemArray(listId){

    newPizzaArray.push(burgerArray.filter((item) => item.id === listId)[0]);

    addCart(newPizzaArray);
  }

  function addCart(cartPizzaArray){
    let arr = cartPizzaArray;
    let topArray = [];

    arr.forEach((item) => {
      if(arr != "") topArray.push(arr[0]);
      arr = arr.filter((el) => {
        return arr[0].id != el.id;
      });
    });

    let li = 0;
    let listArr = [];

    topArray.forEach((item) => {
      let count = cartPizzaArray.filter((element) => {
        return element.id == item.id
      })

      li = `
      <li class="meal2__item">
         <img src="${item.imgUrl}" class="meal2__img">

         <div class="meal2__textbox">
             <p class="box2__itemText">${item.name}</p>
             <span class="box2__itemSpan">${item.gram}г</span>
             <span class="box2__itemPrice">${item.price}₽</span>
         </div>

         <button class="meal2__btn"><span class="meal2__minus" remove(${item.id})>-</span> ${count.length} <span class="meal2__plus" onclick="addItemArray(${item.id})">+</span></button>
      </li>

      `;

      listArr.push(li);
      cartList.innerHTML = listArr.join("")
    });

    cartPizzaArray.forEach((item) => {
      total += item.price;
    })

    subtotal.innerHTML = total.toFixed(2);
  }


function remove(elId){
  let count = 0;
  let a = [];

  newPizzaArray.forEach((element) => {
    if(element.id == elId && count == 0){
      count++;
    }
    else{
      a.push(element)
    }
  })

  newPizzaArray = a;
  if(newPizzaArray.length == 0){
    menuList.innerHTML = "";
  }
  addCart(newPizzaArray);

}




// modal start___________________________________________________________
let openModal = document.querySelector(".modal__buyurtma");
let openBtn = document.querySelector(".meal2__btnStyle");
let openBox = document.querySelector(".meal2__sub");
let closeBtn = document.querySelector(".bx-x");

openBtn.addEventListener("click", ()=>{
    openModal.classList.add("show");
    audio.play();
})
openBox.addEventListener("click", ()=>{
    openModal.classList.add("show");
    audio.play();
})

closeBtn.addEventListener("click", ()=>{
    openModal.classList.remove("show");
    audio.play();
})
// modal end___________________________________________________________





// about modal___________________________________________________________
let about = document.querySelector("#modal__about1");
let openAbout = document.querySelector(" .meal2__img2");
let closeAbout = document.querySelector(".about__x");

openAbout.addEventListener("click", ()=>{
  about.classList.add("active");
  audio.play();
})

closeAbout.addEventListener("click", ()=>{
  about.classList.remove("active");
  audio.play();
})






// menu start______________________________________________________________
let openMenu = document.querySelector(".meal2__menuBox");
let closeMenu = document.querySelector(".menu__window");
let menu = document.querySelector(".meal2__box1");

openMenu.addEventListener("click", ()=>{
  menu.classList.add("transform");
})






