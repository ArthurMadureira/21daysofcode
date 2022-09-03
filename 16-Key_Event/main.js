const keyTypeField = document.querySelector(".key")
const capsLockAct = document.querySelector(".capslock")
const charCodeDOM = document.querySelector(".char-code")


document.addEventListener("keydown", (e) => {
  console.log(e);
  keyTypeField.textContent = e.key
  let isCapsLockActived = e.getModifierState('CapsLock')

  if (isCapsLockActived == true) {
    capsLockAct.textContent = 'Yes'
  } else {
    capsLockAct.textContent = 'No'
  }

  const charCod = e.key.charCodeAt()
  charCodeDOM.textContent = charCod
})