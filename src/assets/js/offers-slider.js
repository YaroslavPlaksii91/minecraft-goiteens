import 'slick-carousel';
import $ from 'jquery';

$('.offers-slider').slick({
  centerMode: true,
  variableWidth: true,
  mobileFirst: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1279.98,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
  ],
});

// $('.js-changeCurrency').on('click', function () {
//   var filter = $(this).data('currency');
//   // $('.offers-slider').slick('slickUnfilter');

//   if (filter === 'usd') {
//     $('.offers-slider').slick('slickFilter', 'div.usd');
//     $('.js-changeCurrency').removeClass('active');
//     $(this).addClass('active');
//   } else if (filter === 'uah') {
//     $('.offers-slider').slick('slickFilter', '.uah');
//     $('.js-changeCurrency').removeClass('active');
//     $(this).addClass('active');
//   } else if (filter === 'eur') {
//     $('.offers-slider').slick('slickFilter', '.eur');
//     $('.js-changeCurrency').removeClass('active');
//     $(this).addClass('active');
//   }
// });
