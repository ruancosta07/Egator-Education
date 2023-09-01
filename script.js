let navbarMovile = document.querySelector('#nav-mobile');
let menuMobile = document.querySelector('#menu');

menuMobile.addEventListener('click', () => {
  navbarMovile.classList.toggle('active')
})

let question1 = document.querySelector('#question1');
let question2 = document.querySelector('#question2');
let question3 = document.querySelector('#question3');
let question4 = document.querySelector('#question4');
let question5 = document.querySelector('#question5');
let question6 = document.querySelector('#question6');

question1.addEventListener('click', (e) => {
  document.querySelector('#hidden1').classList.toggle('hidden')
})

question2.addEventListener('click', (e) => {
  document.querySelector('#hidden2').classList.toggle('hidden')
})

question3.addEventListener('click', (e) => {
  document.querySelector('#hidden3').classList.toggle('hidden')
})

question4.addEventListener('click', (e) => {
  document.querySelector('#hidden4').classList.toggle('hidden')
})

question5.addEventListener('click', (e) => {
  document.querySelector('#hidden5').classList.toggle('hidden')
})

question6.addEventListener('click', (e) => {
  document.querySelector('#hidden6').classList.toggle('hidden')
})

let cardStudents = document.querySelectorAll('[data-anime]');

function showCard() {
  let windowTop = window.pageYOffset + (window.innerHeight * 1)
  cardStudents.forEach((el, i) => {
    setTimeout(function () {
      if (windowTop > el.offsetTop) {
        el.classList.add('animate')
      }
    }, 110 * i)
  })
}

showCard();

window.addEventListener('scroll', function () {
  showCard()
})
