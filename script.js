`use strict`;
const header = document.querySelector(".header");
const mobileNavBar = document.querySelector(".fa-bars");
const mobileNavBarLinks = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
// Header reveal on scroll
window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 5) {
    header.classList.add("active");
    mobileNavBarLinks.classList.remove("active");
  } else {
    header.classList.remove("active");
  }
};
console.log(window.scrollY);

// Mobile nav item reveal on hover on the nac bar

mobileNavBar.addEventListener("mouseenter", function () {
  mobileNavBarLinks.classList.toggle("active");
});
body.addEventListener("mouseenter", function () {
  mobileNavBarLinks.classList.remove("active");
});

console.log(window.scrollY);
