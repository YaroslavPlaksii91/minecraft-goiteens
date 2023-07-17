import jQuery from 'jquery';

jQuery(function () {
  const openModalPayBtn = document.querySelectorAll('[data-modal-pay-open]');
  const modalPay = document.querySelector('[data-modal-pay]');
  const closeModalBtn = document.querySelector('[data-modal-pay-close]');
  const body = document.querySelector('body');

  openModalPayBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      const cardElementsList = e.target
        .closest('.offer-payment-card')
        .querySelectorAll('[data-modal-info');
      const modalElementsList = document
        .querySelector('.modal-payment')
        .querySelectorAll('[data-modal-info');

      const modalText = getModalText(cardElementsList);
      writeModalText(modalElementsList, modalText);

      setTimeout(() => {
        toggleModalPay();
      }, 500);
    });
  });

  function getModalText(lists) {
    let text = [];
    lists.forEach(elm => {
      const value = elm.textContent.trim();
      const clearedValue = value.includes('-') ? value.slice(1, value.length) : value;
      text = [...text, clearedValue];
    });

    const [courseName, duration, perMonth, symbolCurrency, newPrice, oldPrice, discount] = text;
    const currencySymbol = symbolCurrency.slice(0, 1);

    return [courseName, duration, perMonth, oldPrice, discount, newPrice, currencySymbol];
  }

  function writeModalText(list, values) {
    const [courseName, duration, perMonth, oldPrice, discount, newPrice, currencySymbol] = values;
    const [courseNameModal, durationModal, oldPriceModal, discountModal, newPriceModal] = list;

    if (discount === undefined) {
      courseNameModal.textContent = courseName;
      durationModal.textContent = duration;
      oldPriceModal.textContent = `${perMonth} ${currencySymbol}`;
      discountModal.parentNode.classList.add('visually-hidden');
      newPriceModal.textContent = `${perMonth} ${currencySymbol}`;
      newPriceModal.previousElementSibling.classList.add('modal-payment-oneMonth');
      return;
    }
    discountModal.parentNode.classList.remove('visually-hidden');
    newPriceModal.previousElementSibling.classList.remove('modal-payment-oneMonth');

    courseNameModal.textContent = courseName;
    durationModal.textContent = duration;
    oldPriceModal.textContent = oldPrice;
    discountModal.textContent = discount;
    newPriceModal.textContent = newPrice;
  }

  function toggleModalPay() {
    modalPay.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKey(e) {
    if (!modalPay.classList.contains('is-hidden')) {
      if (e.key === 'Escape') {
        toggleModalPay();
      }
    }
    return;
  }

  function handleClose(e) {
    if (e.target === e.currentTarget) {
      toggleModalPay();
    }
    return;
  }

  document.addEventListener('keydown', handleKey);
  modalPay.addEventListener('mousedown', handleClose);
  closeModalBtn.addEventListener('click', toggleModalPay);
});
