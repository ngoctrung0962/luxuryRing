function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 100) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
}
window.addEventListener("scroll", scrollHeader);

function changeBackgroundNav(a, b) {
  const header = document.getElementById("header");
  const buttonToggleNav = document.getElementsByClassName("navbar-toggler");
  const value = buttonToggleNav[0].classList.contains("collapsed");
  if (value === true) {
    header.classList.remove("background-pink");
  } else {
    header.classList.add("background-pink");
  }
}
const buttonToggleNav = document.getElementsByClassName("navbar-toggler");

buttonToggleNav[0].addEventListener("click", changeBackgroundNav);
changeBackgroundNav(show, value);
