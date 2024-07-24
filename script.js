const navbar = document.querySelector(".navbar");
const hamburg = document.querySelector(".hamburg-menu");

hamburg.addEventListener("click", function () {
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    hamburg.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    hamburg.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
