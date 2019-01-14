import "bootstrap";

var myAnimation = anime({
  targets: ['.I'],
  translateX: ['-300vh', '0vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.R1', '.R2'],
  translateX: ['-300vh', '9vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 250,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.R3'],
  translateX: ['-300vh', '25vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 250,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.R4'],
  translateX: ['-300vh', '12vh'],
  rotate: 230,
  duration: 3000,
  loop: false,
  delay: 250,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.D1', '.D2'],
  translateX: ['-300vh', '34vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 500,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.D3'],
  translateX: ['-300vh', '45vh'],
  rotate: 230,
  duration: 3000,
  loop: false,
  delay: 500,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.D4'],
  translateX: ['-300vh', '52.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 500,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.D5'],
  translateX: ['-300vh', '47.5vh'],
  rotate: 315,
  duration: 3000,
  loop: false,
  delay: 500,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.A1', '.A2'],
  translateX: ['-300vh', '61.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 750,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.A3'],
  translateX: ['-300vh', '79.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 750,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.A4'],
  translateX: ['-300vh', '71.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 750,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.N1'],
  translateX: ['-300vh', '88.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 1000,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.N2'],
  translateX: ['-300vh', '98.25vh'],
  rotate: 323,
  duration: 3000,
  loop: false,
  delay: 1000,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.N3'],
  translateX: ['-300vh', '108.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 1000,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.E1', '.E2', '.E3'],
  translateX: ['-300vh', '117.5vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 1250,
  opacity:1,
  backgroundColor: '#C4C4C4',
});
var myAnimation = anime({
  targets: ['.E4'],
  translateX: ['-300vh', '125vh'],
  rotate: 360,
  duration: 3000,
  loop: false,
  delay: 1250,
  opacity:1,
  backgroundColor: '#C4C4C4',
});

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
    // console.log("slideInAt", slideInAt)
    // console.log("offsetTop", (sliderImage.offsetTop + 1100))

    // bottom of the image
    const imageBottom = sliderImage.offsetTop + 900
    const isHalfShown = slideInAt > (sliderImage.offsetTop + 950);
    const isNotScrolledPast = window.scrollY < imageBottom;
    // console.log("HalfWayShown", isHalfShown)
    // console.log("isNotScrolledPast", isNotScrolledPast)
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  })
  sliderTitles.forEach(sliderTitle => {
    const slideInAt = (window.scrollY + window.innerHeight);
    console.log("slideInAt", slideInAt)
    console.log("offsetTop", (sliderTitle.offsetTop + 3350))

    const imageBottom = sliderTitle.offsetTop + 3350
    const isHalfShown = slideInAt > (sliderTitle.offsetTop + 3350);
    const isNotScrolledPast = window.scrollY < imageBottom;
    console.log("HalfWayShown", isHalfShown)
    console.log("isNotScrolledPast", isNotScrolledPast)
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

