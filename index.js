const sliderBlur = document.getElementById("sliderblur");

sliderBlur.addEventListener("change", function () {
  document.documentElement.style.setProperty("--blur", `${this.value}px`);
});

const sliderSize = document.getElementById("slidersize");

sliderSize.addEventListener("change", function () {
  document.documentElement.style.setProperty("--size", `${this.value}px`);
});

const grayScale = document.getElementById("grayscale");

grayScale.addEventListener("change", function () {
  document.documentElement.style.setProperty("--grayscale", `${this.value}%`);
});

const contrast = document.getElementById("contrast");

contrast.addEventListener("change", function () {
  document.documentElement.style.setProperty("--contrast", `${this.value}%`);
});

const hueRotate = document.getElementById("hue-rotate");

hueRotate.addEventListener("change", function () {
  document.documentElement.style.setProperty(
    "--hue-rotate",
    `${this.value}deg`
  );
});

const changeColor = document.getElementById("change-color");

changeColor.addEventListener("change", function () {
  document.documentElement.style.setProperty("--color", this.value);
});

window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        const img = document.querySelector("img");
        img.src = URL.createObjectURL(this.files[0]);
      }
    });
});
