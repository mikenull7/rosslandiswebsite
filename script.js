// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#" || targetId === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

// Force scroll to top on reload
window.onload = () => window.scrollTo(0, 0);

// Slideshow logic
const slideshowImages = [
  "assets/photos/miw_1.png",
  "assets/photos/miw_2.png",
  "assets/photos/ab_keys.png",
  "assets/photos/ab_rah.png",
  "assets/photos/itm_1.png",
  "assets/photos/Nomo_1.png",
  "assets/photos/ptv.png",
  "assets/photos/soty1.png",
  "assets/photos/itmss1.png",
  "assets/photos/itmss2.png",
  "assets/photos/itmss3.png",
  "assets/photos/nomoss1.png",
];

let currentIndex = 0;
const slideshowImageEl = document.getElementById("slideshow-image");

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideshowImages.length;
  slideshowImageEl.style.opacity = 0;

  setTimeout(() => {
    slideshowImageEl.src = slideshowImages[currentIndex];
    slideshowImageEl.style.opacity = 1;
  }, 500);
}

setInterval(nextSlide, 3000);

// AOS scroll animation
AOS.init({
  duration: 800,
  once: false,
});
