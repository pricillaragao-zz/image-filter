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
