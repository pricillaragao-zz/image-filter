const blurInput = document.getElementById("blur");

blurInput.addEventListener("change", function () {
  document.documentElement.style.setProperty("--blur", `${this.value}px`);
});

const borderSizeInput = document.getElementById("border-size");

borderSizeInput.addEventListener("change", function () {
  document.documentElement.style.setProperty("--size", `${this.value}px`);
});

const grayScaleInput = document.getElementById("grayscale");

grayScaleInput.addEventListener("change", function () {
  document.documentElement.style.setProperty("--grayscale", `${this.value}%`);
});

const contrastInput = document.getElementById("contrast");

contrastInput.addEventListener("change", function () {
  document.documentElement.style.setProperty("--contrast", `${this.value}%`);
});

const hueRotateInput = document.getElementById("hue-rotate");

hueRotateInput.addEventListener("change", function () {
  document.documentElement.style.setProperty(
    "--hue-rotate",
    `${this.value}deg`
  );
});

const changeColorInput = document.getElementById("change-color");

changeColorInput.addEventListener("change", function () {
  document.documentElement.style.setProperty("--color", this.value);
  borderSizeInput.removeAttribute("disabled");
});

window.addEventListener("load", function () {
  const fileInput = document.querySelector('input[type="file"]');

  fileInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const img = document.querySelector("img");
      img.src = URL.createObjectURL(this.files[0]);
    }
  });
});
