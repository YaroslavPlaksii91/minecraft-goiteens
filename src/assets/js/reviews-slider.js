import 'slick-carousel';
import $ from 'jquery';

$('.reviews-slider').slick({
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
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        infinite: false,
        arrows: false,
        centerMode: false,
        // variableWidth: false,
      },
    },
  ],
});
