const $textElement = document.querySelector('.font-viewer__text')
const $max = document.querySelector('.max')
const $min = document.querySelector('.min')
const $ideal = document.querySelector('.ideal')
const $minInput = document.querySelector('.min input')
const $maxInput = document.querySelector('.max input')

const updateValues = () => {
  let pageWidth = window.innerWidth
  let fontSizeText = getComputedStyle($textElement).fontSize.slice(0, -2)

  document.querySelector('.window').innerText = pageWidth + 'px'
  document.querySelector('.actual').innerText = `${Math.round(
    parseInt(fontSizeText)
  )}px`

  checkFontSize(parseInt(fontSizeText))
}

const checkFontSize = (fontSizeText) => {
  const minVal = parseInt($minInput.value)
  const maxVal = parseInt($maxInput.value)

  const removeClass = (except) => {
    $max.classList.remove('highlight')
    $min.classList.remove('highlight')
    $ideal.classList.remove('highlight')
    if (except) except.classList.add('highlight')
  }

  if (fontSizeText === maxVal) removeClass($max)
  else if (fontSizeText === minVal) removeClass($min)
  else removeClass($ideal)
}

updateValues()
window.onresize = updateValues
