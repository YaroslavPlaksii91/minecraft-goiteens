import jQuery from 'jquery';

jQuery(function () {
  const openModalPayBtn = document.querySelectorAll('[data-modal-pay-open]');
  const modalPay = document.querySelector('[data-modal-pay]');
  const closeModalBtn = document.querySelector('[data-modal-pay-close]');
  const body = document.querySelector('body');

  openModalPayBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      setTimeout(() => {
        toggleModalPay();
      }, 500);
    });
  });

  function toggleModalPay() {
    modalPay.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKey(e) {
    if (!modal.classList.contains('is-hidden')) {
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
