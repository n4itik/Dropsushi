var menuIcon = document.getElementById('menu-icon');
var menu = document.querySelector('.header__menu-mobile');

menuIcon.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none') ? 'flex' : 'none';
  });
  