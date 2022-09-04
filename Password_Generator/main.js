const inputRange = document.querySelector(".range")

const upperCaseCheckbox = document.getElementById("uppercase-check")
const lowerCaseCheckBox = document.getElementById("lowercase-check")
const numbersCheckbox = document.getElementById("numbers-check")
const specialCharactersCheckbox = document.getElementById("special-check")

const password = document.querySelector(".pass")

let lowerCase = 'abcdefghijklmnopqrstuvwxyz'

let upperCaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let numbersArr = '1234567890'

let specialCharacters = '/%()*&¨$#@!^~<>|'

const arrays = []

function disorder(value) {
  let pos, temp;
  let x = ''
  for (let i = 0; i < inputRange.value; i++) {
    pos = Math.floor(Math.random() * arrays.length);
    temp = value[pos];
    // value.splice(pos, 1);
    // value.push(temp);

    // let f = [...temp]
    x += (temp)
  }

  return x
}

upperCaseCheckbox.addEventListener("change", () => {
  arrays.push(...upperCaseArr)
})

lowerCaseCheckBox.addEventListener("change", () => {
  arrays.push(...lowerCase)
})

numbersCheckbox.addEventListener("change", () => {
  arrays.push(...numbersArr)
})

specialCharactersCheckbox.addEventListener("change", () => {
  arrays.push(...specialCharacters)
})

inputRange.addEventListener("change", (e) => {



  password.textContent = disorder(arrays)
  console.log(disorder(arrays));

  // for (let i = 0; i < inputRange.ariaValueMax; i++) {

  // }
})

