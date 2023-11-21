const menuOpenBtn = document.querySelector(".menu-open");
const menuCloseBtn = document.querySelector(".menu-close");
const menuList = document.querySelector(".menu__list");

menuOpenBtn.addEventListener("click", () => {
  menuOpenBtn.classList.add("menu-open__close");
  menuCloseBtn.classList.add("menu-close__open");
  menuList.classList.add("menu__list--open");
});
menuCloseBtn.addEventListener("click", () => {
  menuOpenBtn.classList.remove("menu-open__close");
  menuCloseBtn.classList.remove("menu-close__open");
  menuList.classList.remove("menu__list--open");
});
