// var images = new Array(
//   "../img/VRGC-Hero-1.jpg",
//   "../img/VRGC-Hero-2.jpg",
//   "../img/VRGC-Hero-3.jpg",
//   "../img/VRGC-Hero-4.jpg"
// );

function slideshowImages() {
  for (let i = 1; i <= 13; i++) {
    const imageDivs = document.createElement("div");
    imageDivs.style.backgroundImage = `linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url(../img/VRGC-Hero-${i}.jpg)`;

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
