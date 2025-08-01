document.addEventListener("DOMContentLoaded", function () {
  // Mobile Nav Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function () {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.hidden = isExpanded;
  });

  // Carousel functionality
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentSlide = 0;

  function updateSlide() {
    const width = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * width}px)`;
  }

  if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    });

    window.addEventListener("resize", updateSlide);
  }
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
  });
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// back to top functionality
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dropdown contact box
const contactBtn = document.getElementById("contactBtn");
const contactDropdown = document.getElementById("contactDropdown");

document.addEventListener("click", (e) => {
  const isClickInside =
    contactBtn.contains(e.target) || contactDropdown.contains(e.target);

  if (isClickInside) {
    contactDropdown.hidden = !contactDropdown.hidden;
  } else {
    contactDropdown.hidden = true;
  }
});
