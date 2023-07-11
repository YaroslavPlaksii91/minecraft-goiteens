import 'slick-carousel';
import $ from 'jquery';

$('.teachers-slider').slick({
  variableWidth: true,
  mobileFirst: true,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
