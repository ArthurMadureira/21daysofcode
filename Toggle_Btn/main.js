const box = document.querySelector(".box")
const ball = document.querySelector(".ball")

box.addEventListener("click", () => {
  ball.classList.toggle("off")
  box.classList.toggle("off")
})