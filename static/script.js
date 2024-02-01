/*
inspiration
https://cz.pinterest.com/pin/830703093790696716/
*/

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      460: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2
      },
      1600: {
        slidesPerView: 3
      }
    }
  });