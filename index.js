const blurInput = document.getElementById('blur')

blurInput.addEventListener('change', function () {
  document.documentElement.style.setProperty('--blur', `${this.value}px`)
})

const borderSizeInput = document.getElementById('border-size')

borderSizeInput.addEventListener('change', function () {
  document.documentElement.style.setProperty('--size', `${this.value}px`)
})

const grayScaleInput = document.getElementById('grayscale')

grayScaleInput.addEventListener('change', function () {
  document.documentElement.style.setProperty('--grayscale', `${this.value}%`)
})

const contrastInput = document.getElementById('contrast')

contrastInput.addEventListener('change', function () {
  document.documentElement.style.setProperty('--contrast', `${this.value}%`)
})

const hueRotateInput = document.getElementById('hue-rotate')

hueRotateInput.addEventListener('change', function () {
  document.documentElement.style.setProperty('--hue-rotate', `${this.value}deg`)
})

const changeColorInput = document.getElementById('change-color')

changeColorInput.addEventListener('change', function () {
  document.documentElement.style.setProperty('--color', this.value)
  borderSizeInput.removeAttribute('disabled')
})

window.addEventListener('load', function () {
  const userImgInput = document.getElementById('user-img-input')

  userImgInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      const file = this.files[0]

      const userImg = document.getElementById('user-img')
      userImg.src = URL.createObjectURL(file)

      const imgDownloadAnchor = document.getElementById('user-img-download')
      const filename = file.name
      const blob = new Blob([file])
      const url = URL.createObjectURL(blob)
      imgDownloadAnchor.setAttribute('download', `edited-${filename}`)
      imgDownloadAnchor.setAttribute('href', url)
    }
  })
})
