const burgerMenuButton = document.querySelector('.burger-menu-button'),
      navMenu = document.querySelector('.nav-menu'),
      arrowMenuClose = document.querySelector('.arrow-menu-close');

burgerMenuButton.addEventListener('click', () => {
  navMenu.classList.add('is-active');
  arrowMenuClose.classList.add('is-active');
});

arrowMenuClose.addEventListener('click', () => {
  navMenu.classList.remove('is-active');
  arrowMenuClose.classList.remove('is-active');
})

// ------ Высплывающая форма для заказа билетов ------

const hideForm = document.querySelector('.hide-form'),
      orderTicket = document.querySelector('.order-ticket'),
      orderTrigger = document.querySelector('.order-trigger'),
      orderTicketForm = document.querySelector('.order-ticket__form'),
      orderTicketFormWrapper = document.querySelector('.order-ticket__form-wrapper'),
      orderTicketPreloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper'),
      orderTicketThanksWrapper = document.querySelector('.order-ticket__thanks-wrapper'),
      orderTicketThanksName = document.querySelector('.order-ticket__thanks-name');

// Появление ярлыка всплывающей формы через 1 с после загрузки сайта
setTimeout(() => {
  // const heightForm = orderTicket.offsetHeight;
  hideForm.style.bottom = -orderTicket.offsetHeight + 'px';
}, 1000)
// Функция отправки данных на сервер
const sendData = (data, callback, callBefore) => {

  if (callBefore) callBefore();

  fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(callback);
}
//
const showPreloader = () => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'block';
}
// 
const showThankYou = (data) => {
  orderTicketPreloaderWrapper.style.display = 'none';
  orderTicketThanksWrapper.style.display = 'block';
  orderTicketThanksName.textContent = data.name;
}


// Открытие и закрытие формы
orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');
})
// Изменение лэйблов при вводе данных в поля
orderTicketForm.addEventListener('change', event => {
  const label = event.target.labels[0];

  if (label && event.target.value) {
    label.classList.add('order-ticket__label-focus');
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
})
// Сбор данных из формы и отправка на сервер
orderTicketForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(orderTicketForm);
  const data = {};
  for (const [name, value] of formData) {
    data[name] = value;
  }

  sendData(data, showThankYou, showPreloader);
})