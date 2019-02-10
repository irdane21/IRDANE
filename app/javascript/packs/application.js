 import "bootstrap";

 //Nav bar

const nav = document.querySelector('#maine');
if (nav) {
  const topNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav')
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav')
    }
  }

  window.addEventListener('scroll', fixNav);
}

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

// dropdown menu for mobile
const menu = document.getElementById("dropp")

function showMenu() {
  console.log('click')
  document.getElementById("myDropDownMenu").classList.toggle("show");
}

if(menu != null) {
  menu.addEventListener('click', showMenu)
};

//sites content method

const triggers = document.querySelectorAll('.card-website-edge');
const background  = document.querySelector('.contentBackground');

  function handleEnter() {
    this.classList.add('trigger-enter');
  }

  function handleLeave() {
    this.classList.remove('trigger-enter');
  }

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

//Game Whack a Mole

const holes = document.querySelectorAll('.hole');
if (holes != null) {
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const buttonStart = document.querySelector('.startGame');
  const tableauScoreEasy = document.querySelector('.ladder-easy');
  const tableauScoreHard = document.querySelector('.ladder-hard');
  const buttonHard = document.querySelector('.btn-hard');
  const buttonEasy = document.querySelector('.btn-easy');
  const endGameMessage = document.querySelector('.end-game-message');
  if (endGameMessage) {
    const textInput = endGameMessage.querySelector('h4');
    const nameInput = endGameMessage.querySelector('input');
    const buttonInput = endGameMessage.querySelector('button');
    const holesEasy = document.querySelectorAll('.hole-easy');
  }

  let lastHole;
  let timeUp = false;
  let score = 0;
  let gameMode = "easy";
  let winner = false;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randHoles(holes) {
    if (gameMode == "easy") {
      const idx = Math.floor(Math.random()* holesEasy.length);
      const hole = holesEasy[idx];
      if (hole === lastHole) {
        return randHoles(holesEasy);
      }
      lastHole = hole;
      return hole;
    } else {
      const idx = Math.floor(Math.random()* holes.length);
      const hole = holes[idx];
      if (hole === lastHole) {
        return randHoles(holes);
      }
      lastHole = hole;
      return hole;
    }
  }

  function popUp(){
    if (gameMode == "easy") {
      const time = randomTime(200, 2000);
      const hole = randHoles(holesEasy);
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) popUp();
      }, time);
    } else {
      const time = randomTime(150, 1000);
      const hole = randHoles(holes);
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) popUp();
      }, time);
    }
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    popUp();
    if (gameMode == "easy") {
      setTimeout(() => {
        checkScore();
        timeUp = true;
      }, 10000)
    } else {
      setTimeout(() => {
        checkScore();
        timeUp = true;
      }, 20000)
    }
  }

  function checkScore() {
    const myArray = []
    if (gameMode == "hard") {
      const parties = [...tableauScoreHard.querySelectorAll('tr')]
      const scores = parties.forEach(partie => {
        const oneScore = partie.querySelector('.player-score')
        myArray.push(oneScore.innerText)
      })
      myArray.forEach(oldScore => {
        if ( oldScore == "" || oldScore == NaN || score >= parseInt(oldScore)) {
          winner = true;
        };
      })
      if (winner) {
        popTheForm();
      } else {
        looseMessage();
      }
    } else {
      const parties = [...tableauScoreEasy.querySelectorAll('tr')]
      const scores = parties.forEach(partie => {
        const oneScore = partie.querySelector('.player-score')
        myArray.push(oneScore.innerText)
      })
      myArray.forEach(oldScore => {
        if ( oldScore == "" || oldScore == NaN || score >= parseInt(oldScore)) {
          winner = true;
        };
      })
      if (winner) {
        popTheForm();
      } else {
        looseMessage();
      }
    }
  }

  function popTheForm() {
    winner = false;
    nameInput.classList.add('opa-city');
    buttonInput.classList.add('opa-city');
    textInput.innerText = 'You are on the Top Ladder! Save your score:'
  }

  function looseMessage() {
    const textInput = endGameMessage.querySelector('h4');
    textInput.innerText = 'Sorry but you are not on the top ladder... Try again'
  }

  function submitScore() {
    let name = nameInput.value;
    instanceItInDatabase(name);
    let scoreMoved;
    let nameMoved;
    if (gameMode == "hard") {
      const parties = [...tableauScoreHard.querySelectorAll('tr')];
      const scores = parties.forEach(partie => {
        const oneScore = partie.querySelector('.player-score');
        if ( score >= parseInt(oneScore.innerText) || oneScore.innerText == "" || oneScore.innerText == "NaN" ) {
          nameMoved = (partie.querySelector('.player-name')).innerText;
          console.log(nameMoved)
          scoreMoved = parseInt(oneScore.innerText);
          console.log(scoreMoved)
          oneScore.innerText = `${score}`;
          (partie.querySelector('.player-name')).innerText = name;
          name = nameMoved
          score = scoreMoved
        }
      })

    } else {
      const parties = [...tableauScoreEasy.querySelectorAll('tr')]
      const scores = parties.forEach(partie => {
        const oneScore = partie.querySelector('.player-score');
        if ( score >= parseInt(oneScore.innerText) || oneScore.innerText == "" || oneScore.innerText == "NaN" ) {
          nameMoved = (partie.querySelector('.player-name')).innerText;
          console.log(nameMoved)
          scoreMoved = parseInt(oneScore.innerText);
          console.log(scoreMoved)
          oneScore.innerText = `${score}`;
          (partie.querySelector('.player-name')).innerText = name;
          name = nameMoved
          score = scoreMoved
        }
      })
    }
    nameInput.classList.remove('opa-city');
    buttonInput.classList.remove('opa-city');
    textInput.innerText = ''
  }

  function instanceItInDatabase(name) {
    console.log('je suis à la requète')
    $.ajax({
      type: "POST",
      url: "/parties",
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
      data: { partie: { name: name, difficulty: gameMode, score: score, game: "whack a mole"}},
    }).then((response) => {
      console.log(response)
    });
  }


  function getPoint(e) {
    if (!e.isTrusted) return
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
  }

  function showLadder(e) {
    if (e.target.textContent == "HARD") {
      holes.forEach(hole => hole.classList.add('hole-active'));
      gameMode = "hard"
    } else {
      holes.forEach(hole => hole.classList.remove('hole-active'));
      gameMode = "easy"
    }
    buttonEasy.classList.toggle('btn-active');
    buttonHard.classList.toggle('btn-active');
    tableauScoreHard.classList.toggle('table-hide');
    tableauScoreEasy.classList.toggle('table-hide');

  }

  if (buttonEasy) {
    buttonEasy.addEventListener('click', showLadder);
    buttonHard.addEventListener('click', showLadder);
    moles.forEach(mole => mole.addEventListener('click', getPoint));
    buttonStart.addEventListener('click', startGame);
    buttonInput.addEventListener('click', submitScore);
  }

}


// drag and drop creations page

const slider = document.querySelector('.items');
if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;


  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft
    console.log(e.pageX)
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');

  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;

    slider.scrollLeft = scrollLeft - walk;
    console.log(startX, x)

  });
}
