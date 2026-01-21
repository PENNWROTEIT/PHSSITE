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

/* UPDATE VIEW */
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

/* BUTTON SUPPORT */
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

/* INIT */
updateCarousel();
