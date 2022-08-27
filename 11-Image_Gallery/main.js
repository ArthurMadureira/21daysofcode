const images = document.querySelectorAll("img")
const modalOverlay = document.querySelector(".modal-overlay")
const imgModal = document.querySelector(".image-modal")

const close = document.querySelector(".material-symbols-outlined")

images.forEach(img => {
  img.addEventListener("click", (e) => {

    modalOverlay.classList.add("active")
    imgModal = e.currentTarget.src
    console.log(e.currentTarget);
  })
})

close.addEventListener("click", () => {
  modalOverlay.classList.remove("active")
})