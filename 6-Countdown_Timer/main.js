const deadline = new Date("Sep 5, 2022 23:59:59").getTime()

function countdownTimer() {
  const now = new Date().getTime()
  const time = deadline - now
  const days = Math.floor(time / (1000 * 60 * 60 * 24))
  const hours = Math.floor( ( time % (1000 *60 * 60 * 24)  ) / (100 * 60 * 60) )
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  const sec = Math.floor((time % (1000 * 60)) / 1000)

  const varDays = document.querySelector(".time-days")
  const varHours = document.querySelector(".time-hours")
  const varMinutes = document.querySelector(".time-min")
  const varSec = document.querySelector(".time-sec")

  varDays.textContent = days + " :"
  varHours.textContent = hours + " :"
  varMinutes.textContent = minutes + " :"
  varSec.textContent = sec
}

 setInterval(countdownTimer, 100)