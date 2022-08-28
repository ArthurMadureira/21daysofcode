const images = document.querySelectorAll("img")
const modalOverlay = document.querySelector(".modal-overlay")
const imgModal = document.querySelector(".image-modal")
const close = document.querySelector(".material-symbols-outlined")

const content = document.querySelector(".content")

images.forEach(img => {
  img.addEventListener("click", (e) => {

    modalOverlay.classList.add("active")
    imgModal.src = e.currentTarget.src
    console.log(e.currentTarget);
  })
})

close.addEventListener("click", () => {
  modalOverlay.classList.remove("active")
})


function addImage(url) {
  const imageDiv = document.createElement("div")
  imageDiv.classList.add("image-div")

  const image = document.createElement("img")
  image.src = url

  content.appendChild(imageDiv)
  imageDiv.appendChild(image)



}

const imgs = JSON.parse(localStorage.getItem("image")) || []


const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()



  const imgURL = document.querySelector("input")

  if (imgURL.value != "") {

    addImage(imgURL.value)
    imgs.push(imgURL.value)

    localStorage.setItem("image", JSON.stringify(imgs))

  } else {
    imgURL.style.border = "2px solid red"
  }

  imgURL.value = ""



})




imgs.forEach(i => {
  addImage(i)
})

