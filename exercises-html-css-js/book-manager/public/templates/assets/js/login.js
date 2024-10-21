document.addEventListener("DOMContentLoaded", function () {
  const inputWrapper = document.querySelector(".input-wrapper");

  for (let i = 0; i < 6; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "input-icon");
    svg.setAttribute("width", "14");
    svg.setAttribute("height", "14");
    svg.setAttribute("viewBox", "0 0 14 14");
    svg.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#A6A6A6"/>`;

    inputWrapper.appendChild(svg);
  }

  // hide SVG when click input password
  const inputField = document.getElementById("password");
  const icons = document.querySelectorAll(".input-icon");

  inputField.addEventListener("focus", () => {
    icons.forEach((icon) => {
      icon.style.display = "none";
    });
  });

  inputField.addEventListener("blur", () => {
    if (inputField.value === "") {
      icons.forEach((icon) => {
        icon.style.display = "block";
      });
    }
  });

  // show or hide checkbox
  const checkbox = document.getElementById("remember-checkbox");
  const checkIcon = document.getElementById("check-icon");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkIcon.style.display = "block";
    } else {
      checkIcon.style.display = "none";
    }
  });
});
