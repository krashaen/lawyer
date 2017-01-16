var orderFormAction = '/order.php';

document.addEventListener('DOMContentLoaded', function(){
  var subscribeForms = document.getElementsByClassName('js-subscribe-form');
  var orderForms = document.getElementsByClassName('js-call-modal-form');
  var questionForms = document.getElementsByClassName('js-question-form');

  orderForms = fromHtmlArrToJsArr(orderForms);
  subscribeForms = fromHtmlArrToJsArr(subscribeForms);
  questionForms = fromHtmlArrToJsArr(questionForms);

  // subscribe to order forms
  orderForms.forEach(function (form) {
    form.onsubmit = onOrderFormSubmit;
  });

  // subscribe to subscriber forms
  subscribeForms.forEach(function (form) {
    form.onsubmit = onSubscribeFormSubmit.bind(null, 'subscribe');
  });

  // subscribe to question form
  questionForms.forEach(function (form) {
    form.onsubmit = onSubscribeFormSubmit.bind(null, 'question');
  });
});

function onOrderFormSubmit(event) {
  event.preventDefault();
  var inputs = fromHtmlArrToJsArr(event.target.elements);
  var data = [{ name: 'type', value: 'connect' }];

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

function onSubscribeFormSubmit(type, event) {
  event.preventDefault();
  var form = event.target;

  openModal('call-modal-accept');

  var inputs = fromHtmlArrToJsArr(event.target.elements);
  var data = [
    { name: 'type', value: type },
    { name: 'time', value: form.getAttribute('data-time') },
    { name: 'cost', value: form.getAttribute('data-cost') }
  ];

  // validate form here if need
  inputs.forEach(function (input) {
    data.push({ name: input.name, value: input.value });
    input.value = '';
  });

  sendFormRequest(data);

  closeModal('consultation-form');
  closeModal('sub-modal');
}

function sendFormRequest(data) {
  var xhr = new XMLHttpRequest();
  var body = data.reduce(function(prev, cur, index) {
    var separator = index ? '&' : '';
    return cur.name ? (prev + separator + cur.name + '=' + encodeURIComponent(cur.value)) : prev;
  }, '');

  xhr.open('POST', orderFormAction, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(body);
}