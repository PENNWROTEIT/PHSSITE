document.addEventListener("DOMContentLoaded", () => {

  // -------------------
  // CAROUSEL BACKGROUNDS
  // -------------------
  const pages = document.querySelectorAll(".page");
  let index = 0;
  const total = pages.length;
  const backgrounds = [
    'PHSCOLLAGEdark.jpg',
    'KINGDAT2.jpeg',
    'PRAYTHENPREY2.JPG',
    'BASDUCK2.jpg',
    'KINGDATARTIST.jpg',
    'KINGDATARTISTEYE.jpg'
  ];
  const sizes = ['cover', 'contain', 'cover', 'contain', 'contain', 'contain'];

  function updateCarousel() {
    pages.forEach(p => p.classList.remove("active"));
    pages[index].classList.add("active");
    document.body.style.backgroundImage = `url("${backgrounds[index]}")`;
    document.body.style.backgroundSize = sizes[index];
  }

  // -------------------
  // CAROUSEL NAVIGATION
  // -------------------
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if(prev && next) {
    prev.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      updateCarousel();
    });

    next.addEventListener("click", () => {
      index = (index + 1) % total;
      updateCarousel();
    });
  }

  updateCarousel();

  // -------------------
  // IMAGE SLIDESHOW
  // -------------------
  const slideImages = [
    'p17.jpg', 'P19.jpg', 'P11.jpg', 'P3.jpg', 'P16.jpg','P13.jpg','P23.jpg','P9.jpg', 
    'P18.jpg','P2.jpg','P24.jpg','P4.jpg', 'P32.jpg','P33.jpg','P6.jpg'
  ];
  const slideTitles = [
    'xPATIENCEx', 'xLEFTYx', 'xTHECOOLINGPERIODx', 'xSTORYOFTHEZODIx', 'xSYXx', 
    'xAVENTOURENEx','xFRUITSOFWISDOMx','xBALLERINAHOPSx','xCHANGEDSUITSx',
    'xKNOCKOUTPUNCHx'
