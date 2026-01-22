// =====================
// FULL SITE SCRIPT
// =====================
document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // CAROUSEL & BACKGROUNDS
  // =====================
  const pages = document.querySelectorAll(".page");
  let pageIndex = 0;

  const backgrounds = [
    'PHSCOLLAGEdark.jpg',
    'KINGDAT2.jpeg',
    'PRAYTHENPREY2.JPG',
    'BASDUCK2.jpg',
    'KINGDATARTIST.JPG',
    'KINGDATARTISTEYE.JPG'
  ];

  const sizes = ['cover', 'contain', 'cover', 'contain', 'center', 'contain'];
  const repeats = ['no-repeat', 'repeat-x', 'no-repeat', 'repeat-x', 'repeat-x', 'repeat-x'];
  const attachments = ['fixed', 'fixed', 'fixed', 'fixed', 'fixed', 'fixed'];

  function updateCarousel() {
    // Update active page
    pages.forEach(p => p.classList.remove("active"));
    pages[pageIndex].classList.add("active");

    // Update background
    const bg = backgrounds[pageIndex];
    const size = sizes[pageIndex];
    const repeat = repeats[pageIndex];
    const attach = attachments[pageIndex];

    document.body.style.backgroundImage = `url("${bg}")`;
    document.body.style.backgroundSize = size;
    document.body.style.backgroundRepeat = repeat;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = fixed;

    // Adjust height for 'contain'
    document.body.style.height = size === 'contain' ? '100vh' : '100%';
  }

  // Carousel navigation
  document.getElementById("prev").onclick = () => {
    pageIndex = (pageIndex - 1 + pages.length) % pages.length;
    updateCarousel();
  };

  document.getElementById("next").onclick = () => {
    pageIndex = (pageIndex + 1) % pages.length;
    updateCarousel();
  };

  updateCarousel(); // initialize

  // =====================
  // SLIDESHOW
  // =====================
  const slideImages = [
    'P17.JPG','P19.JPG','P11.JPG','P3.JPG','P16.JPG','P13.JPG','P23.JPG',
    'P9.JPG','P18.JPG','P2.JPG','P24.JPG','P4.JPG','P32.JPG','P33.JPG','P6.JPG'
  ];

  const slideTitles = [
    'xPATIENCEx','xLEFTYx','xTHECOOLINGPERIODx','xSTORYOFTHEZODIx',
    'xSYXx','xAVENTOURENEx','xFRUITSOFWISDOMx','xBALLERINAHOPSx',
    'xCHANGEDSUITSx','xKNOCKOUTPUNCHx','xSTILLKICKINx','xSINKINGCITIZENSHIPx',
    'xGRADUATIONx','xMYFIRSTSCRIBBLEx','xSTONESx'
  ];

  const slideDescriptions = Array(slideImages.length).fill('By Dat Artist');

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

  updateSlide(); // initialize slideshow

  // =====================
  // MODAL
  // =====================
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const closeModal = document.querySelector(".close-modal");

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
