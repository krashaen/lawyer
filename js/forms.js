var orderFormAction = '/order.php';

document.addEventListener('DOMContentLoaded', function(){
  var orderForms = document.getElementsByClassName('js-call-modal-form');
  orderForms = fromHtmlArrToJsArr(orderForms);
  orderForms.forEach(function (form) {
    form.onsubmit = onOrderFormSubmit;
  });
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

function sendFormRequest(data) {
  var xhr = new XMLHttpRequest();
  var body = data.reduce(function(prev, cur, index) {
    if (cur.name) {
      return prev + '&' + cur.name + '=' + encodeURIComponent(cur.value);
    } else {
      return prev;
    }
  }, '');

  xhr.open('POST', orderFormAction, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(body);
}