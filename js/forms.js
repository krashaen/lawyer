var orderFormAction = '/order.php';

document.addEventListener('DOMContentLoaded', function(){
  var subscribeForms = document.getElementsByClassName('js-subscribe-form');  
  var orderForms = document.getElementsByClassName('js-call-modal-form');

  orderForms = fromHtmlArrToJsArr(orderForms);
  subscribeForms = fromHtmlArrToJsArr(subscribeForms);

  // subscribe to order forms
  orderForms.forEach(function (form) {
    form.onsubmit = onOrderFormSubmit;
  });

  // subscribe to subscriber forms
  subscribeForms.forEach(function (form) {
    form.onsubmit = onSubscribeFormSubmit;
  })
});

function fromHtmlArrToJsArr(elements) {
  return Array.prototype.slice.call(elements);
}

function onOrderFormSubmit(event) {
  event.preventDefault();
  var inputs = fromHtmlArrToJsArr(event.target.elements);
  var data = [];

  // validate form here if need
  inputs.forEach(function (input) {
    data.push({ name: input.name, value: input.value });
    input.value = '';
  });

  sendFormRequest(data);
  openModal('call-modal-accept');

  // for closing modal in mobile version
  closeModal('call-modal__wpapper');
}

function onSubscribeFormSubmit(event) {
  event.preventDefault();
  openModal('call-modal-accept');
  closeModal('consultation-form');
}

function sendFormRequest(data) {
  var xhr = new XMLHttpRequest();
  var body = data.reduce(function(prev, cur, index) {
    return cur.name ? (prev + '&' + cur.name + '=' + encodeURIComponent(cur.value)) : prev;
  }, '');

  xhr.open('POST', orderFormAction, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(body);
}