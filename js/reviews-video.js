const videoBtnReviews = document.querySelectorAll(".js-reviews-video");

videoBtnReviews.forEach((item) => {
  item.addEventListener("click", () => {
    closeVideo(item);
    console.log(item)
    item.children[1].src = item.dataset.reviews;
    item.children[1].classList.add("active");
  });
});

function closeVideo(item) {
  videoBtnReviews.forEach((item) => {
    item.children[1].src = "";
    item.children[1].classList.remove("active");
  });
}

