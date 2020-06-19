const setBlurControl = () => {
  const blurInput = document.getElementById('blur')

  blurInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--blur', `${this.value}px`)
  })
}

const getBorderSizeInput = () => {
  return document.getElementById('border-size')
}

const setBorderControl = () => {
  const borderSizeInput = getBorderSizeInput()

  borderSizeInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--size', `${this.value}px`)
  })
}

const setGrayScaleControl = () => {
  const grayScaleInput = document.getElementById('grayscale')

  grayScaleInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--grayscale', `${this.value}%`)
  })
}

const setContrastControl = () => {
  const contrastInput = document.getElementById('contrast')

  contrastInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--contrast', `${this.value}%`)
  })
}

const setHueRotateControl = () => {
  const hueRotateInput = document.getElementById('hue-rotate')

  hueRotateInput.addEventListener('change', function () {
    document.documentElement.style.setProperty(
      '--hue-rotate',
      `${this.value}deg`
    )
  })
}

const setChangeColorControl = () => {
  const changeColorInput = document.getElementById('change-color')

  changeColorInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--color', this.value)
    getBorderSizeInput().removeAttribute('disabled')
  })
}

const setImgInput = () => {
  const userImgInput = document.getElementById('user-img-input')

  userImgInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      const file = this.files[0]

      const userImg = document.getElementById('user-img')
      userImg.src = URL.createObjectURL(file)
    }
  })
}

window.onload = () => {
  const init = () => {
    setBlurControl()
    setBorderControl()
    setGrayScaleControl()
    setContrastControl()
    setHueRotateControl()
    setChangeColorControl()
    setImgInput()
  }

  init()
}
