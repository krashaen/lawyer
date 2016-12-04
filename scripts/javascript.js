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

function isVisibleItem (itemClassName) {
  var visibleItem = document.getElementsByClassName(itemClassName);
    visibleItem[0].className === itemClassName, itemClassName + '_visible' ?
    visibleItem[0].className = itemClassName
    : null
}

function isTabVisible (tabClassName) {
  var tab = document.getElementsByClassName(tabClassName);
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].className === tabClassName + ' ' + tabClassName + '_visible')
      tab[i].className = tabClassName;
  }

}

function showCurrentItem (itemClassName) {
  var currentItem = document.getElementsByClassName(itemClassName);
    currentItem[0].className === itemClassName ?
    currentItem[0].className = itemClassName + " " + itemClassName + '_visible'
    : currentItem[0].className = itemClassName
}

function showTab(event) {
  var tab = event.target.getAttribute('tab');
  var tabElement = document.querySelector(`[tab=${tab}]`)
  isTabVisible('tabs__item');
  if (tabElement.className === 'tabs__item') tabElement.className = 'tabs__item tabs__item_visible'
  else tabElement.className = 'tabs__item';
  if (tab === 'physical') {
    isVisibleItem('juristical');
    showCurrentItem('physical');
  } else if(tab === 'juristical') {
    isVisibleItem('physical');
    showCurrentItem('juristical');
  }
}