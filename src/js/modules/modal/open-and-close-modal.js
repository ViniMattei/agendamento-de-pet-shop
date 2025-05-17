const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const footer = document.querySelector(".footer");

openModal.onclick = () => {
  modal.style.display = "initial";
  footer.style.display = "none";
}

closeModal.onclick = () => {
  modal.style.display = "none";
  footer.style.display = "initial";
}
