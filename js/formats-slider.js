const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    bulletClass: "swiper-pagination__button",
    bulletActiveClass: "swiper-pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
