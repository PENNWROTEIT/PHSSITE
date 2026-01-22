const pages = document.querySelectorAll(".page");
let index = 0;

const backgrounds = [
  'PHSCOLLAGEdark.jpg',
  'KINGDAT2.jpeg',
  'PRAYTHENPREY2.JPG',
  'BASDUCK2.jpg',
  'KINGDATARTIST.jpg',
  'KINGDATARTISTEYE.jpg'
];

function updateCarousel() {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");

  document.body.style.backgroundImage =
    `url("${backgrounds[index]}")`;
}

document.getElementById("prev").onclick = () => {
  index = (index - 1 + pages.length) % pages.length;
  updateCarousel();
};

document.getElementById("next").onclick = () => {
  index = (index + 1) % pages.length;
  updateCarousel();
};

updateCarousel();

/* SLIDESHOW */
const slideImages = ['p17.jpg','P19.jpg','P11.jpg'];
let slideIndex = 0;

const slideImg = document.getElementById("slide-image");

function updateSlide() {
  slideImg.src = slideImages[slideIndex];
}

document.querySelector(".prev-slide").onclick = () => {
  slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length;
  updateSlide();
};

document.querySelector(".next-slide").onclick = () => {
  slideIndex = (slideIndex + 1) % slideImages.length;
  updateSlide();
};

updateSlide();

/* MODAL */
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");

slideImg.onclick = () => {
  modal.style.display = "flex";
  modalImg.src = slideImg.src;
};

document.querySelector(".close-modal").onclick = () => {
  modal.style.display = "none";
};
