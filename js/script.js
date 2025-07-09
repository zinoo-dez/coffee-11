const menu = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
// console.log('menu', menu)
// console.log('navItems', navItems)
menu.addEventListener("click", function () {
  // alert(123)
  navItems.classList.toggle("show");
  if (navItems.classList.contains("show")) {
    menu.src = "./photos/svgs/close.svg";
  } else {
    menu.src = "./photos/svgs/menu.svg";
  }
});
window.addEventListener("scroll", function () {
  navItems.classList.remove("show");
  menu.src = "./photos/svgs/menu.svg";
});
