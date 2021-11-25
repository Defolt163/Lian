//humburger
$(document).on('ready',function() {
  $('.humburger').on('click',function() {
      $('.humburger, .header__menu').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
      $('body').toggleClass('fixed-page');
  });
});


$(document).on('ready',function(){
    $('.slider-show').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
      });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-show',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
  });