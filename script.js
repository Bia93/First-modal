const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);
//CUM SA STERGI O CLASA-hidden e clasa stearsa

/*btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});*/

//PT A NU REPETA CODUL DE MAI SUS,FACEM O FUNCTIE

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  //e-for event
  //we do not call the function, we are defining it
  //javascript call this function, when a key down event happens
  //and when it did so, pass in the event object as an argument
  //key-property of an object
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//explicatie cod mai sus, incepand cu linia 38:
//if the press key is escape and if the modal does not contain
// the hidden class,then execute disfunction to close the modal
