//humburger
$(document).on('ready',function() {
    $('.humburger').on('click',function() {
        $('.humburger, .header__menu').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
  });