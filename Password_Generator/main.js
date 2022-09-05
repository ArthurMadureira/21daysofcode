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

let arrays = []




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

upperCaseCheckbox.addEventListener("change", (e) => {
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

const checkboxes = [upperCaseCheckbox, lowerCaseCheckBox, numbersCheckbox, specialCharactersCheckbox]

checkboxes.forEach(i => {
  if (i.checked) {
    arrays.push()
  }
})


inputRange.addEventListener("input", () => {
  if (arrays.length == 0) {
    password.textContent = ''
  } else {
    password.textContent = disorder(arrays)
  }


  console.log(password.textContent.includes('undefined'));

  console.log(arrays.includes(upperCaseArr));
})



