$(document).on('ready',function(){
    $('.promo-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="ico/arrows/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="ico/arrows/arrow-right.svg"></button>',
        dots: true,
    });
});

var elem = document.querySelector('.catalog__content_first_active');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.catalog__item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  horizontalOrder: true,
  initLayout: true,
});
var msnry = new Masonry( '.catalog__content_active', {
  // options
  initLayout: true,
});


$('.menu__item').on('click',function() {
  var id = $(this).attr('data-tab'),
      content = $('.catalog__content[data-tab="'+ id +'"]');
  
  $('.menu__item.menu__item_active').removeClass('menu__item_active'); // 1
  $(this).addClass('menu__item_active'); // 2
  
  $('.catalog__content_active').removeClass('catalog__content_active'); // 3
  content.addClass('catalog__content_active'); // 4

  $('.catalog__content').masonry('reload');

  var id = $(this).attr('data-tab'),
      content = $('.catalog__content_first[data-tab="'+ id +'"]');
  
  $('.catalog__content_first_active').removeClass('catalog__content_first_active'); // 3
  content.addClass('catalog__content_first_active'); // 4
});