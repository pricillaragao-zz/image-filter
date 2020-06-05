const sliderBlur = document.getElementById("sliderblur");

sliderBlur.addEventListener("change", function () {
  document.documentElement.style.setProperty("--blur", `${this.value}px`);
});
