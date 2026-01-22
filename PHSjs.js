const pages = document.querySelectorAll(".page");
let index = 0;

const total = pages.length;
const backgrounds = ['PHSCOLLAGEdark.jpg', 'KINGDAT2.jpeg', 'PRAYTHENPREY2.JPG', 'BASDUCK2.jpg', 'KINGDATARTIST.JPG','KINGDATARTISTEYE.JPG'];
const sizes = ['cover', 'contain','cover','contain','contain','contain'];

function updateCarousel() {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");

  document.body.style.backgroundImage =
    `url("${backgrounds[index]}")`;
  document.body.style.backgroundSize = sizes[index];

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
/* SLIDESHOW */
const slideImages = ['P17.JPG', 'P19.JPG', 'P11.JPG', 'P3.JPG', 'P16.JPG','P13.JPG','P23.JPG','P9.JPG', 'P18.JPG','P2.JPG','P24.JPG','P4.JPG', 'P32.JPG','P33.JPG','P6.JPG'];
const slideTitles = ['xPATIENCEx', 'xLEFTYx', 'xTHECOOLINGPERIODx', 'xSTORYOFTHEZODIx', 'xSYXx', 'xAVENTOURENEx','xFRUITSOFWISDOMx','xBALLERINAHOPSx','xCHANGEDSUITSx',
    'xKNOCKOUTPUNCHx', 'xSTILLKICKINx','xSINKINGCITIZENSHIPx','xGRADUATIONx','xMYFIRSTSCRIBBLEx','xSTONESx'
];
const slideDescriptions = [
    'By Dat Artist',
    'By Dat Artist',
    'By Dat Artist',
    'By Dat Artist',
    'By Dat Artist',
    'By Dat Artist',
    'By Dat Artist',
    'By Dat Artist',
     'By Dat Artist',
      'By Dat Artist',
       'By Dat Artist',
        'By Dat Artist',
         'By Dat Artist',
          'By Dat Artist',
           'By Dat Artist',
];

let slideIndex = 0;

const slideImg = document.getElementById("slide-image");

function updateSlide() {
  slideImg.src = slideImages[slideIndex];
  document.getElementById("slide-title").textContent = slideTitles[slideIndex];
  document.getElementById("slide-description").textContent = slideDescriptions[slideIndex];
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
