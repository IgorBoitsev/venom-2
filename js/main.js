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
      orderTicketForm = document.querySelector('.order-ticket__form');

// Появление ярлыка всплывающей формы через 1 с после загрузки сайта
setTimeout(() => {
  // const heightForm = orderTicket.offsetHeight;
  hideForm.style.bottom = -orderTicket.offsetHeight + 'px';
}, 1000)


orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');
})
orderTicketForm.addEventListener('change', event => {
  const label = event.target.labels[0];

  if (label && event.target.value) {
    label.classList.add('order-ticket__label-focus');
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
})