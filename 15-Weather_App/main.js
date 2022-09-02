const loc = document.querySelector(".location")
const desc = document.querySelector(".desc")
const tempC = document.querySelector(".tempC")
const country = document.querySelector(".country")

const input = document.querySelector("input")
const form = document.querySelector("form")

const key = "e5d8d3a45b56a16390eb318427415e39"


function convertion(val) {
  return (val - 273).toFixed(2)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + key)
    .then(res => {
      return res.json()
    })

    .then(data => {

      const name = data['name']
      const descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']

      loc.textContent = "Location: " + name
      desc.textContent = "Description: " + descrip
      desc.style.textTransform = 'capitalize'
      country.textContent = "Country: " + data.sys.country
      tempC.textContent = "Temperature: " + convertion(tempature) + "°C"


    })

})
