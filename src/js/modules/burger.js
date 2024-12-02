const burger = document.querySelector('.header__burger');
const menuMobile = document.querySelector('.header__menu-mobile');
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menuMobile.classList.toggle('open');
  overlay.classList.toggle('active');

});

overlay.addEventListener('click', () => {
  burger.classList.remove('open');
  menuMobile.classList.remove('open');
  overlay.classList.remove('active');
  html.style.overflow = 'auto'

});

burger.addEventListener('click', () => {
  if (menuMobile.classList.contains('open')) {
    html.style.overflow = 'hidden'
  } else {
    html.style.overflow = 'auto'
  }
})
