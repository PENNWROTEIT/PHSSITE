const backgrounds = [
  'PHSCOLLAGEdark.jpg',
  'KINGDAT2.jpeg',
  'PRAYTHENPREY2.JPG',
  'BASDUCK2.jpg',
  'KINGDATARTIST.jpg',
  'KINGDATARTISTEYE.jpg'
];

const sizes = ['cover', 'contain', 'cover', 'contain', 'contain', 'contain'];


/* UPDATE VIEW */
function updateCarousel() {
    pages.forEach(p => p.classList.remove("active"));
    pages[index].classList.add("active");
    document.body.style.backgroundImage = `url("${backgrounds[index]}")`;
    document.body.style.backgroundSize = sizes[index];
}

/* BUTTON SUPPORT */
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateCarousel();
});

next.addEventListener("click", () => {
    index = (index + 1) % total;
    updateCarousel();
});

/* INIT */
updateCarousel();

/* SLIDESHOW */
const slideImages = ['p17.jpg', 'P19.jpg', 'P11.jpg', 'P3.jpg', 'P16.jpg','P13.jpg','P23.jpg','P9.jpg', 'P18.jpg','P2.jpg','P24.jpg','P4.jpg', 'P32.jpg','P33.jpg','P6.jpg'];
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
const slideImg = document.getElementById('slide-image');
const slideTitle = document.getElementById('slide-title');
const slideDesc = document.getElementById('slide-description');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

function updateSlide() {
    if (slideImg) {
        slideImg.src = `${slideImages[slideIndex]}`;
    }
    if (slideTitle) {
        slideTitle.textContent = slideTitles[slideIndex];
    }
    if (slideDesc) {
        slideDesc.textContent = slideDescriptions[slideIndex];
    }
}

if (prevSlide) {
    prevSlide.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length;
        updateSlide();
    });
}

if (nextSlide) {
    nextSlide.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slideImages.length;
        updateSlide();
    });
}

updateSlide();

/* MODAL FUNCTIONALITY */
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');

if (slideImg) {
    slideImg.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = slideImg.src;
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

/* IMAGE PROTECTION */
document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', e => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u' || e.key === 'p')) {
        e.preventDefault();
    }
});
