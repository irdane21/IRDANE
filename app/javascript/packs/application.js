import "bootstrap";

function debounce(func, wait = 25, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.rotate1')
const sliderTitles = document.querySelectorAll('.rotate2')

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // half way throught the image
    const slideInAt = (window.scrollY + window.innerHeight);

    // bottom of the image
    const imageBottom = sliderImage.offsetTop + window.innerHeight + 100
    const isHalfShown = slideInAt > (sliderImage.offsetTop + 200 + window.innerHeight);
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  })
  sliderTitles.forEach(sliderTitle => {
    const slideInAt = (window.scrollY + window.innerHeight);

    const imageBottom = sliderTitle.offsetTop + 2550 + window.innerHeight
    const isHalfShown = slideInAt > (sliderTitle.offsetTop + 2550 + window.innerHeight);
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderTitle.classList.add('active');
    } else {
      sliderTitle.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));

const pressed = [];
const secretCode = 'irdanedash';
window.addEventListener('keyup', (e)=> {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode)) {
    window.location.href = 'http://localhost:3000/dashboard';
  }
})
const mymotion = document.getElementById("tada")
if (mymotion == null) {

} else {
  mymotion.addEventListener("click", (event) => {
    const left = document.getElementById("cachette-left").classList.toggle("motion")
    const right = document.getElementById("cachette-right").classList.toggle("motion")
  })
}

