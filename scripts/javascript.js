function showMenu() {
  var menu = document.getElementsByClassName('menu');
  menu[0].className === 'menu' ?
    menu[0].className = 'menu menu_visible'
    : menu[0].className = 'menu';

  var menuButton = document.getElementsByClassName('nav-bar__menu-button');
  menuButton[0].className === 'nav-bar__menu-button' ?
    menuButton[0].className = 'nav-bar__menu-button nav-bar__menu-button_active'
    : menuButton[0].className = 'nav-bar__menu-button';
}