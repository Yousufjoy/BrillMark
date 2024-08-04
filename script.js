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

document.addEventListener("DOMContentLoaded", function () {
  let ten = document.querySelector(".ten");
  let currentNumber = 0;
  let targetNumber = 10;

  function incrementNumber() {
    if (currentNumber < targetNumber) {
      currentNumber++;
      ten.innerText = `${currentNumber}+`;
    } else {
      clearInterval(interval);
    }
  }

  let interval = setInterval(incrementNumber, 6000);
});

document.addEventListener("DOMContentLoaded", function () {
  let thousand = document.querySelector(".thousand");
  let currentNumber = 0;
  let targetNumber = 1000;

  function incrementNumber() {
    if (currentNumber < targetNumber) {
      currentNumber += 2;
      thousand.innerText = `${currentNumber}+`;
    } else {
      clearInterval(interval);
    }
  }

  let interval = setInterval(incrementNumber, 300);
});

document.addEventListener("DOMContentLoaded", function () {
  let million = document.querySelector(".million");
  let currentNumber = 0;
  let targetNumber = 1000000;

  function incrementNumber() {
    if (currentNumber < targetNumber) {
      currentNumber += 2000;
      million.innerText = `${currentNumber}+`;
    } else {
      clearInterval(interval);
    }
  }

  let interval = setInterval(incrementNumber, 100);
});
document.addEventListener("DOMContentLoaded", function () {
  let hundred = document.querySelector(".hundred");
  let currentNumber = 0;
  let targetNumber = 100;

  function incrementNumber() {
    if (currentNumber < targetNumber) {
      currentNumber++;
      hundred.innerText = `${currentNumber}+`;
    } else {
      clearInterval(interval);
    }
  }

  let interval = setInterval(incrementNumber, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const ourMinds = [
    "We've conducted intricate studies on every major platform and       ",
    "Our team has performed detailed analyses across all leading   ",
    "We've executed comprehensive experiments on every       ",
    "We've carried out advanced trials on each and       ",
    "Our research spans every top-tier platform and too ",
  ];

  let campaignParagraph = document.querySelector(".campaing-paragraph-2");
  let index = 0;

  function updateText() {
    campaignParagraph.innerHTML = ourMinds[index];
    index = (index + 1) % ourMinds.length;
  }

  setInterval(updateText, 3000);

  updateText();
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
