$(document).ready(function () {
  //Carrossel de cursos
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 640px
      570: {
        slidesPerView: 3,
        slidesPerGroup: 5,
        freeMode: false,
      },
      920: {
        slidesPerView: 4,
        slidesPerGroup: 5,
        freeMode: false,
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        freeMode: false,
      },
    },
  });
});
