const navBtnMenu = document.querySelector(".js-open-menu");
const navBMenu = document.querySelector(".js-nav");

navBtnMenu.addEventListener("click", () => {
  navBMenu.classList.add("active");
});
navBMenu.addEventListener("click", (e) => {
  const target = e.target.dataset.nav;
  const targetLink = e.target.nodeName;

  if (target !== "close" && targetLink !== "A") return;

  navBMenu.classList.remove("active");
});
