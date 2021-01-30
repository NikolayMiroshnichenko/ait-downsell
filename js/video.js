const videoInfo = {
  btnOpen: document.querySelector(".js-open-video-block"),
  iframeBlock: document.querySelector(".js-video-block-iframe"),
  wrapper: document.querySelector(".js-video-block-overfloy"),
  link: `<iframe src="https://www.youtube.com/embed/ij90cCk6Vw8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
};

videoInfo.btnOpen.addEventListener("click", () => {
    videoInfo.iframeBlock.insertAdjacentHTML("afterbegin", videoInfo.link);
    videoInfo.wrapper.style.display = "block";
})

videoInfo.wrapper.addEventListener("click", e => {
    if(e.target.dataset.close !== "close") return;
    videoInfo.iframeBlock.innerHTML = "";
    videoInfo.wrapper.style.display = "none";
})


