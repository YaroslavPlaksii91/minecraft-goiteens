const section = document.querySelector('.offers');
const promoForm = document.querySelectorAll('[data-promo]');
const sliders = document.querySelectorAll('.offers-slider');

const showCardInfo = e => {
  const card = e.target.closest('.offer-card');
  const refs = {
    showMoreBtn: card.querySelector('[data-show-more]'),
    moreCardInfo: card.querySelector('[data-more-info]'),
    hideText: card.querySelector('[data-hide]'),
    paymentCurrencyBtn: card.querySelector('[data-promocode]'),
  };

  const isShowMoreBtn = e.target.hasAttribute('data-show-more');
  const isPaymentCurrencyBtn = e.target.hasAttribute('data-promocode');

  if (isShowMoreBtn) {
    refs.moreCardInfo.classList.toggle('visually-hidden');
    refs.hideText.classList.toggle('tab-hide');
    refs.showMoreBtn.classList.toggle('open');
  }

  if (isPaymentCurrencyBtn) {
    const isActiveBtn = e.target.classList.contains('active');

    if (isActiveBtn) return;

    card
      .querySelectorAll('[data-promocode]')
      .forEach(elem => elem.classList.contains('active') && elem.classList.remove('active'));
    e.target.classList.add('active');

    const idCurrentCurrency = e.target.getAttribute('data-currency');

    sliders.forEach(slider => {
      const currentSliderCurrency = slider.getAttribute('data-slider');

      currentSliderCurrency !== idCurrentCurrency
        ? slider.classList.add('hidden-slider')
        : slider.classList.remove('hidden-slider');
    });
  }
};

section.addEventListener('click', showCardInfo);

promoForm.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const [input] = e.target.elements;

    if (input.value.trim().length === 0) {
      input.classList.add('invalid-promo');
      input.setAttribute('placeholder', 'Поле не може бути пустим');
      return;
    }
  });
});
