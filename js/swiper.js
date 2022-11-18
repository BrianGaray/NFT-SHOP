// swiper

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 10,
    draggable: true,
  
    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  
    breakpoints: {
      1536: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  