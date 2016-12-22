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
  var tabElement = document.querySelector(`[tab=${tab}]`);
  isTabVisible(tabElement.className);
  tabElement.className === 'tabs__item' ? tabElement.className = 'tabs__item tabs__item_visible'
  : tabElement.className = 'tabs__item';
  if (tab === 'physical') {
    isVisibleItem('juristical');
    showCurrentItem('physical');
  } else if(tab === 'juristical') {
    isVisibleItem('physical');
    showCurrentItem('juristical');
  }
}

function showSubModal(count) {
  var countModal = document.getElementsByClassName('sub-modal__details');
  var modal = document.getElementsByClassName('sub-modal');
  countModal[0].innerText = count;
  modal[0].className = 'sub-modal visible';
  document.body.style.overflow = 'hidden'; 
}

function closeModal(className) {
  var element = document.getElementsByClassName(className);
  element[0].className = className + ' not-visible';
  document.body.style.overflow = 'auto';
}

function openModal(className) {
  var element = document.getElementsByClassName(className);
  element[0].className = className + ' visible';
  document.body.style.overflow = 'hidden';
}

