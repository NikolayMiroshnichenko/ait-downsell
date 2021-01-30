const refs = {
  overflov: document.querySelector(".js-overflov-programs"),
  modalPrograms: document.querySelectorAll(".js-modal-programs"),
  programs: document.querySelector(".js-program-list"),
};
refs.programs.addEventListener("click", openProgramsModal);

function openProgramsModal(e) {
  e.preventDefault();
  const link = e.target.dataset.open;

  refs.modalPrograms.forEach((item) => {
      if(link == item.dataset.programs) {
        item.classList.add("active");
        refs.overflov.classList.add("active");
      }
  });
}

refs.modalPrograms.forEach(item => {
    item.addEventListener("click", e => {
        if(e.target.dataset.programs !== "close-programs") return;
        item.classList.remove("active");
        refs.overflov.classList.remove("active");
    })
})
