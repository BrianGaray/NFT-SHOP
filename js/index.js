const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});



modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

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
    el: '.swiper-pagination',
    type: 'bullets',
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
