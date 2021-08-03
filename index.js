const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.closeButton');
const mobileMenu = document.querySelector('.mobile');

const showMenu = () => {
  mobileMenu.style.display = 'flex';
};

const hideMenu = () => {
  mobileMenu.style.display = 'none';
};

const checkWidth = () => {
  if (
    document.documentElement.clientWidth > 767 &&
    mobileMenu.style.display === 'flex'
  ) {
    mobileMenu.style.display = 'none';
  }
};

menu.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
window.onresize = checkWidth;


