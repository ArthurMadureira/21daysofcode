const menuBtn = document.querySelector(".menu")
const closeMenu = document.querySelector(".close")
const navBar = document.querySelector(".navbar")

menuBtn.addEventListener("click", () => {
  navBar.classList.add("active")
})

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("active")
})