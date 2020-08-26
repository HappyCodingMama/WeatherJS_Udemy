/* modal */
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const saveChanges = document.querySelector(".btn-save")


modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});



/* end modal */