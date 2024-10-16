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
      asideItems.forEach((item) => {
        const pTag = item.querySelector("p");
        if (pTag) {
          pTag.style.display = "none";
        }
      });
      navIcon.innerHTML = '<i class="las la-expand-arrows-alt"></i>';
    } else {
      asideItems.forEach((item) => {
        const pTag = item.querySelector("p");
        if (pTag) {
          pTag.style.display = "block";
        }
      });
      navIcon.innerHTML = '<i class="las la-bars"></i>';
    }
  });
}

/**
 * change language
 */
const selectedLanguage = document.querySelector(".selected-language");
const languageDrop = document.querySelector(".language-drop");
const languageOptions = document.querySelectorAll(".language-option");
const languageLogo = document.querySelector(".language-logo img");

selectedLanguage.addEventListener("click", () => {
  languageDrop.classList.toggle("active");
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-value"); // vn en jp zh
    const languageName = option.querySelector(
      ".language-option-name"
    ).textContent; // English, ...
    const languageImageSrc = option
      .querySelector(".language-option-img img")
      .getAttribute("src"); // ./assets/images/FlagVN.png

    // set selectedLanguage
    languageLogo.src = languageImageSrc;
    selectedLanguage.textContent = languageName;

    // Xóa dấu tích khỏi tất cả các lựa chọn
    languageOptions.forEach((opt) => opt.classList.remove("selected"));

    // Thêm dấu tích vào lựa chọn hiện tại
    option.classList.add("selected");

    languageDrop.classList.remove("active");
  });
});

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
  "./assets/images/background9.jpg",
  "./assets/images/background13.jpg",
  "./assets/images/background14.png",
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
