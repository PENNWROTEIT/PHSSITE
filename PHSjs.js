document.addEventListener("DOMContentLoaded", () => {

  // -------------------
  // CAROUSEL BACKGROUNDS
  // -------------------
  const pages = document.querySelectorAll(".page");
  if(pages.length === 0) {
    console.warn("No .page elements found. Add .page divs in HTML!");
    return; // stop if no pages
  }

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
  // NAVIGATION BUTTONS
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
  } else {
    console.warn("Navigation buttons #prev or #next not found!");
  }

  // INITIALIZE
  updateCarousel();

});
