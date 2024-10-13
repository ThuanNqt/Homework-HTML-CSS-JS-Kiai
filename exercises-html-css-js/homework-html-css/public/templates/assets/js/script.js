/**
 * resolve active element
 */
const asideItems = document.querySelectorAll(".aside-item");

if (asideItems) {
  asideItems.forEach((item) => {
    item.addEventListener("click", () => {
      // remove class 'selected' from all elements
      asideItems.forEach((i) => i.classList.remove("selected"));
      // add class 'selected' to the clicked element
      item.classList.add("selected");
    });
  });
}

/**
 * close sidebar
 */
const navIcon = document.querySelector(".nav-icon");
const aside = document.querySelector(".aside");

if (navIcon) {
  navIcon.addEventListener("click", () => {
    aside.classList.toggle("hidden");

    if (aside.classList.contains("hidden")) {
      navIcon.innerHTML = '<i class="las la-expand-arrows-alt"></i>'; // Thay icon mới
    } else {
      navIcon.innerHTML = '<i class="las la-bars"></i>';
    }
  });
}

/**
 * change language
 */
const languageSelect = document.querySelector("#language");
const languageLogo = document.querySelector(".language-logo img");

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    // console.log(selectedLanguage);
    if (selectedLanguage === "en") {
      languageLogo.src = "./assets/images/Flag.png";
    } else if (selectedLanguage === "vn") {
      languageLogo.src = "./assets/images/FlagVN.png";
    }
  });
}

/**
 * change image slider
 */
const sliderImages = document.querySelector(".slider img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const images = [
  "./assets/images/background4.jpg",
  "./assets/images/background6.jpg",
  "./assets/images/background7.jpg",
];

let idxImage = 0;

if (sliderImages) {
  function updateStatusButton() {
    // show/hide button Prev
    if (idxImage <= 0) {
      btnPrev.classList.add("hidden");
    } else {
      btnPrev.classList.remove("hidden");
    }

    // show/hide button Next
    if (idxImage >= images.length - 1) {
      btnNext.classList.add("hidden");
    } else {
      btnNext.classList.remove("hidden");
    }
  }

  // start
  updateStatusButton();
  sliderImages.src = images[idxImage];

  // event
  btnPrev.addEventListener("click", () => {
    if (idxImage > 0) {
      idxImage--;
      sliderImages.src = images[idxImage];
      updateStatusButton();
    }
  });

  btnNext.addEventListener("click", () => {
    if (idxImage < images.length - 1) {
      idxImage++;
      sliderImages.src = images[idxImage];
      updateStatusButton();
    }
  });
}
