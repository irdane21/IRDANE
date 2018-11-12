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

const navbar = document.getElementById("logo");
navbar.addEventListener("click", (event) => {
  console.log(event);
  const adril = document.getElementById("button-line-left");
  adril.classList.toggle("mouvement-left")
  const adrir = document.getElementById("button-line-right");
  adrir.classList.toggle("mouvement-right")
});
var navbarleftAnimation = anime({
  targets: ['.mouvement-left'],
  left: ['100%', '0%'],
  duration: 2000,
  loop: false,
  opacity: 1,
  backgroundColor: '#FFF',
  easing: 'easeInOutQuad',
});
var navbarleftAnimation = anime({
  targets: ['.mouvement-right'],
  left: ['0%', '100%'],
  duration: 2000,
  opacity: 1,
  loop: false,
  backgroundColor: '#FFF',
  easing: 'easeInOutQuad',
});

