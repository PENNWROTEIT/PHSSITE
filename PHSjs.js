document.addEventListener('DOMContentLoaded', () => {

    /* ================= PAGE CAROUSEL ================= */
    const pages = document.querySelectorAll('.page');
    let pageIndex = 0;

    const backgrounds = [
        'PHSCOLLAGEdark.jpg',
        'KINGDAT2.jpeg',
        'PRAYTHENPREY2.JPG',
        'BASDUCK2.jpg',
        'KINGDATARTIST.jpg',
        'KINGDATARTISTEYE.jpg'
    ];

    function updatePage() {
        pages.forEach(p => p.classList.remove('active'));
        pages[pageIndex].classList.add('active');
        document.body.style.backgroundImage = `url(${backgrounds[pageIndex]})`;
    }

    document.getElementById('prev').onclick = () => {
        pageIndex = (pageIndex - 1 + pages.length) % pages.length;
        updatePage();
    };

    document.getElementById('next').onclick = () => {
        pageIndex = (pageIndex + 1) % pages.length;
        updatePage();
    };

    /* ================= SWIPE SUPPORT ================= */
    let startX = 0;

    document.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        let endX = e.changedTouches[0].screenX;
        let diff = startX - endX;

        if (Math.abs(diff) > 50) {
            pageIndex = diff > 0
                ? (pageIndex + 1) % pages.length
                : (pageIndex - 1 + pages.length) % pages.length;
            updatePage();
        }
    });

    updatePage();

    /* ================= SLIDESHOW ================= */
    const images = [
        'PHS IMAGES/P17.jpg',
        'PHS IMAGES/P19.jpg',
        'PHS IMAGES/P11.jpg'
    ];

    const titles = ['xPATIENCEx', 'xLEFTYx', 'xTHECOOLINGPERIODx'];
    let slideIndex = 0;

    const slideImg = document.getElementById('slide-image');
    const slideTitle = document.getElementById('slide-title');
    const slideDesc = document.getElementById('slide-description');

    function updateSlide() {
        slideImg.src = images[slideIndex];
        slideTitle.textContent = titles[slideIndex];
        slideDesc.textContent = 'By Dat Artist';
    }

    document.querySelector('.prev-slide').onclick = () => {
        slideIndex = (slideIndex - 1 + images.length) % images.length;
        updateSlide();
    };

    document.querySelector('.next-slide').onclick = () => {
        slideIndex = (slideIndex + 1) % images.length;
        updateSlide();
    };

    /* ================= MODAL ================= */
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');

    slideImg.onclick = () => {
        modal.style.display = 'flex';
        modalImg.src = slideImg.src;
    };

    document.querySelector('.close-modal').onclick = () => {
        modal.style.display = 'none';
    };

    updateSlide();
});


