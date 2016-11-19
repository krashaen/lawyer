function showMenu() {
  var menu = document.getElementsByClassName('menu');
  menu[0].className === 'menu' ?
    menu[0].className = 'menu menu_visible'
    : menu[0].className = 'menu';
}