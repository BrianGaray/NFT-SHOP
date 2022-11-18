const preloader = document.querySelector(".preloader")
window.addEventListener("load" , () =>{
  preloader.style.display = "none";
})


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

//ScrollReveal

sr = ScrollReveal({
  reset: true,
  distance: "20px",

});

sr.reveal(".products", {
  duration:1200,
  distance: "20px",
});
