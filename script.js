const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal(e) {
  console.log("open", e.target);
  modal.style.display = "block";
}

function closeModal(e) {
  console.log("close", e.target);
  modal.style.display = "none";
}

function outsideClick(e) {
  console.log(e.target);
  if (e.target == modal) {
    closeModal();
  }
}
