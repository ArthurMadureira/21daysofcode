const result = document.querySelector(".value")

const btns = document.querySelectorAll(".btn")
const equalBtn = document.querySelector(".equal")
const clearAll = document.querySelector(".clear-all")
const backspace = document.querySelector(".del")

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    result.textContent += e.target.textContent
  })
})

clearAll.addEventListener("click", () => {
  result.textContent = ""
})


equalBtn.addEventListener("click", () => {
  result.textContent = eval(result.textContent)
})

backspace.addEventListener("click", () => {
  result.innerHTML = result.textContent.substring(0, result.textContent.length - 1)
})

