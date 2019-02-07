 import "bootstrap";

// function for show side Title when scroll down home page
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

// Event listener code pour dashboard
const pressed = [];
const secretCode = 'irdanedash';
window.addEventListener('keyup', (e)=> {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode)) {
    window.location.href = 'http://localhost:3000/dashboard';
  }
})

// navbar animation
const mymotion = document.getElementById("tada")
if (mymotion == null) {

} else {
  mymotion.addEventListener("click", (event) => {
    const left = document.getElementById("cachette-left").classList.toggle("motion")
    const right = document.getElementById("cachette-right").classList.toggle("motion")
  })
}

// dropdown menu for mobile
const menu = document.getElementById("logo-mini")

function showMenu() {
  document.getElementById("myDropDownMenu").classList.toggle("show");
}

if(menu != null) {
  menu.addEventListener('click', showMenu)
};

//Shadow on title home page

const hero = document.querySelector('.hero');
if (hero != null) {

  const text = hero.querySelector('h1');
  const walk = 60;

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height} = hero;
    let { offsetY: y, offsetX: x } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    // console.log(x, y)

    const xWalk = Math.round(( x / width * walk ) - ( walk / 2 ));
    const yWalk = Math.round(( y / height * walk ) - ( walk / 2 ));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(240, 240, 240, 0.5)`;
  };

  hero.addEventListener('mousemove', shadow);
}

//Game Whack a Mole

const holes = document.querySelectorAll('.hole');
if (holes != null) {
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const buttonStart = document.querySelector('.startGame');
  const tableauScoreEasy = document.querySelector('.table-easy');
  const tableauScoreHard = document.querySelector('.table-hard');
  const buttonHard = document.querySelector('.btn-hard');
  const buttonEasy = document.querySelector('.btn-easy');

  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randHoles(holes) {
    const idx = Math.floor(Math.random()* holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log("it's the same hole");
      return randHoles(holes);
    }
    lastHole = hole;
    return hole;
  }

  function popUp(){
    const time = randomTime(200, 1000);
    const hole = randHoles(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) popUp();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    popUp()
    setTimeout(() => {
      timeUp = true;
    }, 10000)
  }

  function getPoint(e) {
    if (!e.isTrusted) return
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
  }

  function showLadder() {
    buttonEasy.classList.toggle('btn-active');
    buttonHard.classList.toggle('btn-active');
    tableauScoreHard.classList.toggle('table-hide');
    tableauScoreEasy.classList.toggle('table-hide');

  }

  buttonEasy.addEventListener('click', showLadder);
  buttonHard.addEventListener('click', showLadder);
  moles.forEach(mole => mole.addEventListener('click', getPoint));
  buttonStart.addEventListener('click', startGame);
}
