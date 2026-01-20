document.addEventListener('DOMContentLoaded', () => {
    /* =========================
       PAGE CAROUSEL + BACKGROUNDS
    ========================= */
    const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;
    let pageIndex = 0;

    const backgrounds = [
        'PHSCOLLAGEdark.jpg',
        'KINGDAT2.jpeg',
        'PRAYTHENPREY2.JPG',
        'BASDUCK2.jpg',
        'KINGDATARTIST.jpg',
        'KINGDATARTISTEYE.jpg'
    ];
    const sizes = ['cover', 'contain', 'cover', 'contain', 'contain', 'contain'];

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    function updateCarousel() {
        pages.forEach(p => p.classList.remove('active'));
        pages[pageIndex].classList.add('active');
        document.body.style.backgroundImage = `url("${backgrounds[pageIndex]}")`;
        document.body.style.backgroundSize = sizes[pageIndex];
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    }

    prevBtn.addEventListener('click', () => {
        pageIndex = (pageIndex - 1 + totalPages) % totalPages;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        pageIndex = (pageIndex + 1) % totalPages;
        updateCarousel();
    });

    updateCarousel();

    /* =========================
       SLIDESHOW
    ========================= */
    const slideImages = [
        'p17.jpg', 'P19.jpg', 'P11.jpg', 'P3.jpg', 'P16.jpg',
        'P13.jpg','P23.jpg','P9.jpg', 'P18.jpg','P2.jpg','P24.jpg',
        'P4.jpg', 'P32.jpg','P33.jpg','P6.jpg'
    ];
    const slideTitles = [
        'xPATIENCEx', 'xLEFTYx', 'xTHECOOLINGPERIODx', 'xSTORYOFTHEZODIx', 
        'xSYXx', 'xAVENTOURENEx','xFRUITSOFWISDOMx','xBALLERINAHOPSx',
        'xCHANGEDSUITSx','xKNOCKOUTPUNCHx', 'xSTILLKICKINx','xSINKINGCITIZENSHIPx',
        'xGRADUATIONx','xMYFIRSTSCRIBBLEx','xSTONESx'
    ];
    const slideDescriptions = Array(slideImages.length).fill('By Dat Artist');

    let slideIndex = 0;

    const slideImg = document.getElementById('slide-image');
    const slideTitle = document.getElementById('slide-title');
    const slideDesc = document.getElementById('slide-description');
    const prevSlideBtn = document.querySelector('.prev-slide');
    const nextSlideBtn = document.querySelector('.next-slide');

    function updateSlide() {
        if (slideImg) slideImg.src = slideImages[slideIndex];
        if (slideTitle) slideTitle.textContent = slideTitles[slideIndex];
        if (slideDesc) slideDesc.textContent = slideDescriptions[slideIndex];
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length;
            updateSlide();
        });
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slideImages.length;
            updateSlide();
        });
    }

    updateSlide();

    /* =========================
       MODAL FOR FULL-SCREEN IMAGES
    ========================= */
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
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    /* =========================
       IMAGE PROTECTION
    ========================= */
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
        if ((e.ctrlKey || e.metaKey) && ['s','u','p'].includes(e.key)) e.preventDefault();
    });
});

