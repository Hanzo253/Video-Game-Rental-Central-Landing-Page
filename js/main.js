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

// Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");
const startRentBtn = document.querySelector("#start-rent");
const howItWorksBtn = document.querySelector("#how-it-works");
const pricingSection = document.querySelector(".pricing-section");
const howSection = document.querySelector(".how-section");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    // close mobile navigation
    if (link.classList.contains("header-nav-link")) {
      header.classList.toggle("nav-opened");
    }
  });
});

function smoothScroll() {
  let scrollToPlans = () => {
    // window.scroll({
    //   top: pricingSection.offsetTop,
    //   left: 0,
    //   behavior: "smooth",
    // });
    pricingSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  let scrollToHow = () => {
    howSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  startRentBtn.addEventListener("click", scrollToPlans);
  howItWorksBtn.addEventListener("click", scrollToHow);
}

smoothScroll();

// sticky navigation bar
const heroSection = document.querySelector("#hero-section");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSection);

const loginBtn = document.querySelector(".nav-btn");
const selectPlanBtnStandard = document.querySelector(".standard-btn");
const selectPlanBtnPremium = document.querySelector(".premium-btn");

function notImplementedMessage() {
  alert(
    "This button has no function implemented yet. I will work on them in the future."
  );
}

loginBtn.addEventListener("click", notImplementedMessage);
selectPlanBtnStandard.addEventListener("click", notImplementedMessage);
selectPlanBtnPremium.addEventListener("click", notImplementedMessage);

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
