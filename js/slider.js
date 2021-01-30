var swiper = new Swiper(".js-reviews-slider", {
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: ".reviews-btn__next",
    prevEl: ".reviews-btn__prev",
  },
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
});

var reviews = new Swiper(".js-reviews-video-slider", {
  freeMode: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".reviews-video-btn__next",
    prevEl: ".reviews-video-btn__prev",
  },
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1190: {
      slidesPerView: 2,
      spaceBetween: 100,
    }
  }
});
