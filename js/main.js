// Start Discover-Collection Section ----------------------------------------------------------------------------

// The Environement
const itemsContainer = document.querySelector(".discover-collection-content"); // HTML element = object
const itemsContainerWidth = itemsContainer.offsetWidth; // Number
const collectionItems = document.querySelectorAll(".discover-collection-item"); // NodeList = array
let itemPerSlide = 0;
let currentSlide = 0;
let autoSlide = 0;
let slideDots;
const responsive = [
  { breakPoint: { width: 0, item: 1 } },
  { breakPoint: { width: 900, item: 2 } }
];

// Functions
function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      itemPerSlide = responsive[i].breakPoint.item;
    }
  }
  start();
}
function start() {
  for (let i = 0; i < collectionItems.length; i++) {
    collectionItems[i].style.flexBasis = `${100 / itemPerSlide}%`;
  }
  numberSlideDots = Math.ceil(collectionItems.length / itemPerSlide);
  for (let i = 0; i < numberSlideDots; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.setAttribute("onclick", "controlSlide(this)");
    // onclick call the function controlSlide(this)
    if (i == 0) {
      div.classList.add("active");
    }
    document.querySelector(".slide-controls").appendChild(div);
  }
}
function controlSlide(element) {
  currentSlide = element.id;
  changeSlide(currentSlide);
}
function changeSlide() {
  controlButtons = document.querySelector(".slide-controls").children;
  for (let i = 0; i < controlButtons.length; i++) {
    if (controlButtons[i].id == currentSlide) {
      controlButtons[i].classList.add("active");
    } else {
      controlButtons[i].classList.remove("active");
    }
  }
  if (currentSlide == 0) {
    itemsContainer.style.transform = "translateX(0%)";
  }
  if (currentSlide == 1) {
    itemsContainer.style.transform = "translateX(-100%)";
  }
  if (currentSlide == 2) {
    itemsContainer.style.transform = "translateX(-200%)";
  }
  if (currentSlide == 3) {
    itemsContainer.style.transform = "translateX(-300%)";
  }
  if (currentSlide == 4) {
    itemsContainer.style.transform = "translateX(-400%)";
  }
  if (currentSlide == 5) {
    itemsContainer.style.transform = "translateX(-500%)";
  }
  if (currentSlide == 6) {
    sliderContainer.style.transform = "translateX(-600%)";
  }
}

// The Event
window.onload = load();
// End Discover-Collection Section ------------------------------------------------------------------------------
