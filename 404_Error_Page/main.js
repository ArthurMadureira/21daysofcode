const ulEl = document.querySelector("ul")

for (let i = 0; i < 14; i++) {
  const li = document.createElement("li")
  li.textContent = "404"

  const random = (min, max) => Math.random() * (max- min) + min

  const size = Math.floor(random(10, 120))

  const position = random(1, 99)

  li.style.fontSize = `${size}px`
  li.style.bottom = `-${size}px`
  li.style.left = `${position}%`

  // li.style.animationDelay = `${random(5, 0.1)}s`
  li.style.animationDuration= `${random(24, 12)}s`
  li.style.animationTimingFunction = `cubic-bezier(${Math.random() * 20},${Math.random() * 20},${Math.random() * 20},${Math.random() * 20})`

  ulEl.appendChild(li)
}