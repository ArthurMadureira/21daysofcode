const btn = document.querySelector(".btn")
const space = document.querySelector(".space")
const text = document.querySelector("p")

let width = 0

function loading() {
  const interval = setInterval(load, 10)

  function load() {
    if (width >= 100) {
      width = 0
      clearInterval(interval)
    } else {
      width++
      space.style.width = `${width}%`
      text.innerHTML = `${width}%`
    }
  }
}

loading()

btn.addEventListener("click", loading)