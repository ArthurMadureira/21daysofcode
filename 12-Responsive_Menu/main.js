const menuIcon = document.querySelector(".menu")
const navBar = document.querySelector(".navbar")
const closeMenu = document.querySelector(".close")

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active")
  menuIcon.classList.toggle("click")
})

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("active")
  menuIcon.classList.remove("click")
})

