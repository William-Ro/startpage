// Slideshow
const imagePath = "assets/";
const len = 33;
const images = Array.from({ length: len }, (_, i) => `side${i + 1}.gif`);

function getSeed() {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getDailyDefaultSlideIndex() {
  const seed = getSeed();
  return Math.floor(seededRandom(seed) * len) + 1;
}

let slideIndex = localStorage.getItem("slideIndex");
const dailyDefaultSlideIndex = getDailyDefaultSlideIndex();

if (!slideIndex) {
  slideIndex = dailyDefaultSlideIndex;
  localStorage.setItem("slideIndex", slideIndex);
} else {
  slideIndex = parseInt(slideIndex, 10);
  const lastAccessedDate = localStorage.getItem("lastAccessedDate");
  const currentDate = new Date().toDateString();
  if (lastAccessedDate !== currentDate) {
    slideIndex = dailyDefaultSlideIndex;
    localStorage.setItem("slideIndex", slideIndex);
  }
}

localStorage.setItem("lastAccessedDate", new Date().toDateString());
const slideshow = document.getElementById("slideshow");
images.forEach((img, i) => {
  slideshow.innerHTML += `<div class="mySlides"><img src="${imagePath}${img}" style="cursor:pointer;" onclick="changeSlide(1)"></div>`;
});

function changeSlide(n) {
  setSlide(slideIndex + n);
}

function setSlide(n) {
  const slides = document.getElementsByClassName("mySlides");
  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;
  [...slides].forEach((s, i) => {
    s.style.opacity = i === slideIndex - 1 ? "1" : "0";
    s.style.transition = "opacity .7s";
  });
  localStorage.setItem("slideIndex", slideIndex);
}

setSlide(slideIndex);
