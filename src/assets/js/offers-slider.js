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
