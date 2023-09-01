let cardCourses = document.querySelectorAll('[data-anime]');

function showCard() {
  let windowTop = window.pageYOffset + (window.innerHeight* 10)
  cardCourses.forEach((el, i) => {
    setTimeout(function () {
      if (windowTop > el.offsetTop) {
        el.classList.add('animate')
      }
    }, 50 * i)
  })
}

showCard();

window.addEventListener('scroll', function () {
  showCard()
})