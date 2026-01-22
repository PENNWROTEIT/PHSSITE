// =====================
// CAROUSEL & BACKGROUND
// =====================

document.addEventListener("DOMContentLoaded", () => {
const pages = document.querySelectorAll(".page");
let index = 0;

const backgrounds = [
  'PHSCOLLAGEdark.jpg',
  'KINGDAT2.jpeg',
  'PRAYTHENPREY2.JPG',
  'BASDUCK2.jpg',
  'KINGDATARTIST.JPG',
  'KINGDATARTISTEYE.JPG'
];

const sizes = ['cover', 'contain', 'cover', 'contain', 'contain', 'contain'];

function updateCarousel() {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");

  const bg = backgrounds[index];
  const size = sizes[index];

  document.body.style.backgroundImage = `url("${bg}")`;
  document.body.style.backgroundSize = size;
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';

  // Optional: adjust height if using 'contain' to avoid blank space
  if (size === 'contain') {
    document.body.style.height = '100vh';
  } else {
    document.body.style.height = '100%';
  }
}

// Navigation
document.getElementById("prev").onclick = () => {
  index = (index - 1 + pages.length) % pages.length;
  updateCarousel();
};

document.getElementById("next").onclick = () => {
  index = (index + 1) % pages.length;
  updateCarousel();
};

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});


  // Initialize carousel on page load
  updateCarousel();

  // =====================
  // SLIDESHOW
  // =====================
  const slideImages = ['P17.JPG', 'P19.JPG', 'P11.JPG', 'P3.JPG', 'P16.JPG','P13.JPG','P23.JPG','P9.JPG', 'P18.JPG','P2.JPG','P24.JPG','P4.JPG', 'P32.JPG','P33.JPG','P6.JPG'];
  const slideTitles = ['xPATIENCEx', 'xLEFTYx', 'xTHECOOLINGPERIODx', 'xSTORYOFTHEZODIx', 'xSYXx', 'xAVENTOURENEx','xFRUITSOFWISDOMx','xBALLERINAHOPSx','xCHANGEDSUITSx',
      'xKNOCKOUTPUNCHx', 'xSTILLKICKINx','xSINKINGCITIZENSHIPx','xGRADUATIONx','xMYFIRSTSCRIBBLEx','xSTONESx'];
  const slideDescriptions = Array(slideImages.length).fill('By Dat Artist'); // shorthand for repeated text

  let slideIndex = 0;
  const slideImg = document.getElementById("slide-image");
  const slideTitle = document.getElementById("slide-title");
  const slideDesc = document.getElementById("slide-description");

  function updateSlide() {
    slideImg.src = slideImages[slideIndex];
    slideTitle.textContent = slideTitles[slideIndex];
    slideDesc.textContent = slideDescriptions[slideIndex];
  }

  document.querySelector(".prev-slide").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length;
    updateSlide();
  });

  document.querySelector(".next-slide").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slideImages.length;
    updateSlide();
  });

  updateSlide();

  // =====================
  // MODAL
  // =====================
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const closeModal = document.querySelector(".close-modal");

  // Hide modal initially
  modal.style.display = "none";

  slideImg.addEventListener("click", () => {
    if (slideImg.src) {
      modal.style.display = "flex";
      modalImg.src = slideImg.src;
    }
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

