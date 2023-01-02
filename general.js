let menuIsOpen = false;
let menu_icon;
let nav;

function showUnshowMenu() {
  menu_icon = document.querySelector(".menu-icon");
  nav = document.querySelector(".main-nav--list");
  if (!menuIsOpen) {
    menuIsOpen = true;
    nav.classList.add("open");
    menu_icon.style.background = 'url("../img/close-outline.svg"';
  } else {
    closeMenu();
  }
}

function closeMenu() {
  menu_icon = document.querySelector(".menu-icon");
  nav = document.querySelector(".main-nav--list");
  menuIsOpen = false;
  nav.classList.remove("open");
  menu_icon.style.background = 'url("../img/menu-outline.svg"';
  console.log("clicked link");
}

let navbar;
let sticky;
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  navbar = document.querySelector(".navigation");

  let sticky = navbar.offsetTop;
  console.log("scrolling" + sticky);

  if (window.pageYOffset >= 800) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
