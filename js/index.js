let reserveTableButtonOpen = document.getElementById("reserveTableButtonOpen");

let modalClose = document.getElementById("modalClose");
let modalWindow = document.getElementById("modalWindow");
let modalCancel = document.getElementById("modalCancel");

reserveTableButtonOpen.addEventListener("click", function () {
  modalWindow.style.display = "block";
});

modalClose.onclick = function () {
  modalWindow.style.display = "none";
};

modalCancel.onclick = function () {
  modalWindow.style.display = "none";
};

let burgerMenu = document.getElementById("burgerMenu");

let burgerList = document.getElementById("burgerList");
let itemBurgerList = document.getElementsByClassName('nav-item block');


burgerMenu.addEventListener("click", function () {
  burgerList.classList.toggle('display-list');
});

for(let i=0; i<itemBurgerList.length; i++){
  itemBurgerList.item(i).onclick = function(){
    burgerList.classList.toggle('display-list');
  }
}


const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
