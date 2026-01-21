document.addEventListener("DOMContentLoaded", () => {

    /* CAROUSEL */
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
        if (!pages.length) return;

        pages.forEach(p => p.classList.remove("active"));

        if (pages[index]) {
            pages[index].classList.add("active");
        }

        if (backgrounds[index]) {
            document.body.style.backgroundImage =
                `url("../PHS IMAGES/${backgrounds[index]}")`;
            document.body.style.backgroundSize = sizes[index] || 'cover';
        }
    }

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    if (prev) {
        prev.addEventListener("click", () => {
            index = (index - 1 + total) % total;
            updateCarousel();
        });
    }

    if (next) {
        next.addEventListener("click", () => {
            index = (index + 1) % total;
            updateCarousel();
        });
    }

    updateCarousel();

    /* SLIDESHOW */
    const slideImages = [
        'p17.jpg','P19.jpg','P11.jpg','P3.jpg','P16.jpg',
        'P13.jpg','P23.jpg','P9.jpg','P18.jpg','P2.jpg',
        'P24.jpg','P4.jpg','P32.jpg','P33.jpg','P6.jpg'
    ];

    const slideTitles = [
        'xPATIENCEx','xLEFTYx','xTHECOOLINGPERIODx','xSTORYOFTHEZODIx',
        'xSYXx','xAVENTOURENEx','xFRUITSOFWISDOMx','xBALLERINAHOPSx',
        'xCHANGEDSUITSx','xKNOCKOUTPUNCHx','xSTILLKICKINx',
        'xSINKINGCITIZENSHIPx','xGRADUATIONx','xMYFIRSTSCRIBBLEx','xSTONESx'
    ];

    const slideDescriptions = new Array(slideImages.length).fill('By Dat Artist');

    let slideIndex = 0;

    const slideImg = document.getElementById('slide-image');
    const slideTitle = document.getElementById('slide-title');
    const slideDesc = document.getElementById('slide-description');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');

    function updateSlide() {
        if (!slideImg) return;

        slideImg.src = `../PHS IMAGES/${slideImages[slideIndex]}`;
        if (slideTitle) slideTitle.textContent = slideTitles[slideIndex];
        if (slideDesc) slideDesc.textContent = slideDescriptions[slideIndex];
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

    /* MODAL */
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');

    if (slideImg && modal && modalImg) {
        slideImg.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = slideImg.src;
        });
    }

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    /* IMAGE PROTECTION */
    document.addEventListener('contextmenu', e => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    document.addEventListener('dragstart', e => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    document.addEventListener('selectstart', e => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && ['s','u','p'].includes(e.key.toLowerCase())) {
            e.preventDefault();
        }
    });

});
