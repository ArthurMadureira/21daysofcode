const body = document.getElementById("body")
const box = document.querySelector(".box")
const ball = document.querySelector(".ball")

box.addEventListener("click", () => {
  body.classList.toggle("dark")
})