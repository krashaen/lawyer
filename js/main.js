function fromHtmlArrToJsArr(elements) {
  return Array.prototype.slice.call(elements);
}

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

function showSubModal(months, cost, title) {
  var countModal = document.getElementsByClassName('sub-modal__details')[0];
  var modal = document.getElementsByClassName('sub-modal')[0];

  countModal.innerText = title;

  modal.querySelector('form').setAttribute('data-time', months);
  modal.querySelector('form').setAttribute('data-cost', cost);
  modal.className = 'sub-modal visible';

  document.body.style.overflow = 'hidden'; 
}

function showConsultationForm() {
  var modal = document.getElementsByClassName('consultation-form');
  modal[0].className = 'consultation-form visible';
  document.body.style.overflow = 'hidden'; 
}

function closeModal(className) {
  var element = document.getElementsByClassName(className)[0];
  var forms = fromHtmlArrToJsArr(element.querySelectorAll('form'));

  // clear data attributes
  forms.forEach(function (form) {
    for(var i = 0; i < form.attributes.length; i++) {
      if (form.attributes[i].name.indexOf('data') >= 0) {
        form.removeAttribute(form.attributes[i].name);
      }
    }
  })

  element.className = className + ' not-visible';
  document.body.style.overflow = 'auto';
}

function openModal(className) {
  var element = document.getElementsByClassName(className);
  element[0].className = className + ' visible';
  document.body.style.overflow = 'hidden';
}
