const sliderBlur = document.getElementById("sliderblur");

sliderBlur.addEventListener("change", function () {
  document.documentElement.style.setProperty("--blur", `${this.value}px`);
});

const sliderSize = document.getElementById("slidersize");

sliderSize.addEventListener("change", function () {
  document.documentElement.style.setProperty("--size", `${this.value}px`);
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
