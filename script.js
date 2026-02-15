const imagePath = "assets/";
const len = 33;

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

function getImageSrc(index) {
  return `${imagePath}side${index}.gif`;
}

function showSlide(index) {
  slideshow.innerHTML = `<div class="mySlides" style="opacity:1"><img src="${getImageSrc(index)}" style="cursor:pointer;" onclick="changeSlide(1)"></div>`;
  preloadAdjacent(index);
}

function preloadAdjacent(index) {
  const next = index >= len ? 1 : index + 1;
  const img = new Image();
  img.src = getImageSrc(next);
}

function changeSlide(n) {
  setSlide(slideIndex + n);
}

function setSlide(n) {
  slideIndex = n > len ? 1 : n < 1 ? len : n;
  showSlide(slideIndex);
  localStorage.setItem("slideIndex", slideIndex);
}

setSlide(slideIndex);
