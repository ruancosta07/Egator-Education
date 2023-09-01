let card1 = document.querySelector('#card1');
let link1 = document.querySelector('#link1');
let card2 = document.querySelector('#card2');
let link2 = document.querySelector('#link2');
let card3 = document.querySelector('#card3');
let link3 = document.querySelector('#link3');
let card4 = document.querySelector('#card4');
let link4 = document.querySelector('#link4');
let card5 = document.querySelector('#card5');
let link5 = document.querySelector('#link5');
let card6 = document.querySelector('#card6');
let link6 = document.querySelector('#link6');
let card7 = document.querySelector('#card7');
let link7 = document.querySelector('#link7');
let card8 = document.querySelector('#card8');
let link8 = document.querySelector('#link8');

card1.addEventListener('click', () => {
  link1.classList.remove('tutor-links-active')
})

card2.addEventListener('click', () => {
  link2.classList.remove('tutor-links-active')
})

card3.addEventListener('click', () => {
  link3.classList.remove('tutor-links-active')
})

card4.addEventListener('click', () => {
  link4.classList.remove('tutor-links-active')
})

card5.addEventListener('click', () => {
  link5.classList.remove('tutor-links-active')
})

card6.addEventListener('click', () => {
  link6.classList.remove('tutor-links-active')
})

card7.addEventListener('click', () => {
  link7.classList.remove('tutor-links-active')
})

card8.addEventListener('click', () => {
  link8.classList.remove('tutor-links-active')
})

// ------------------------------------------ //

card1.addEventListener('mouseleave', () => {
  link1.classList.add('tutor-links-active')
})


card2.addEventListener('mouseleave', () => {
  link2.classList.add('tutor-links-active')
})

card3.addEventListener('mouseleave', () => {
  link3.classList.add('tutor-links-active')
})

card4.addEventListener('mouseleave', () => {
  link4.classList.add('tutor-links-active')
})

card5.addEventListener('mouseleave', () => {
  link5.classList.add('tutor-links-active')
})

card6.addEventListener('mouseleave', () => {
  link6.classList.add('tutor-links-active')
})

card7.addEventListener('mouseleave', () => {
  link7.classList.add('tutor-links-active')
})

card8.addEventListener('mouseleave', () => {
  link8.classList.add('tutor-links-active')
})

// --------------------------------------- //

card1.addEventListener('mouseenter', () => {
  link1.classList.remove('tutor-links-active')
})

card2.addEventListener('mouseenter', () => {
  link2.classList.remove('tutor-links-active')
})

card3.addEventListener('mouseenter', () => {
  link3.classList.remove('tutor-links-active')
})

card4.addEventListener('mouseenter', () => {
  link4.classList.remove('tutor-links-active')
})

card5.addEventListener('mouseenter', () => {
  link5.classList.remove('tutor-links-active')
})

card6.addEventListener('mouseenter', () => {
  link6.classList.remove('tutor-links-active')
})

card7.addEventListener('mouseenter', () => {
  link7.classList.remove('tutor-links-active')
})

card8.addEventListener('mouseenter', () => {
  link8.classList.remove('tutor-links-active')
})

let cardTutors = document.querySelectorAll('[data-anime]');

function showCard() {
  let windowTop = window.pageYOffset + (window.innerHeight * 1)
  cardTutors.forEach((el, i) => {
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


