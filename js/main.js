function slideshowImages() {
  for (let i = 1; i <= 13; i++) {
    const imageDivs = document.createElement("div");
    imageDivs.style.backgroundImage = `linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url(../img/VGRC-Hero-${i}.jpg)`;

    i === 1 && imageDivs.classList.add("change");

    document.querySelector(".hero-slideshow").appendChild(imageDivs);
  }
}

slideshowImages();

const images = document.querySelectorAll(".hero-slideshow div");

let imageCount = 1;

function slideShow() {
  setInterval(() => {
    imageCount++;
    const currentImage = document.querySelector(".hero-slideshow .change");
    currentImage.classList.remove("change");

    if (imageCount <= images.length) {
      currentImage.nextElementSibling.classList.add("change");
    } else {
      images[0].classList.add("change");
      imageCount = 1;
    }
  }, 10000);
}

slideShow();

const swiper = new Swiper(".mySwiper-1", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".mySwiper-2", {
  // Optional parameters
  slidesPerView: 2,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Mobile navigation
const navBtn = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");

navBtn.addEventListener("click", openNav);

function openNav() {
  header.classList.toggle("nav-opened");
}

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
