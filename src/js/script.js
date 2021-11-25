$(document).on('ready',function(){
    $('.promo-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="ico/arrows/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="ico/arrows/arrow-right.svg"></button>',
        dots: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              dots: true,
            }
          }
        ]
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
$('.menu__item').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		$('.catalog__content_first').masonry({
			itemSelector: '.catalog__item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      horizontalOrder: true,
      initLayout: true,
		}, 500);
	});
});
var msnry = new Masonry( '.catalog__content_active', {
  // options
  initLayout: true,
});
$('.menu__item').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		$('.catalog__content').masonry({
			itemSelector: '.catalog__item'
		}, 500);
	});
});


$('.menu__item').on('click',function() {
  var id = $(this).attr('data-tab'),
      content = $('.catalog__content[data-tab="'+ id +'"]');
  
  $('.menu__item.menu__item_active').removeClass('menu__item_active'); // 1
  $(this).addClass('menu__item_active'); // 2
  
  $('.catalog__content_active').removeClass('catalog__content_active'); // 3
  content.addClass('catalog__content_active'); // 4

  var id = $(this).attr('data-tab'),
      content = $('.catalog__content_first[data-tab="'+ id +'"]');
  
  $('.catalog__content_first_active').removeClass('catalog__content_first_active'); // 3
  content.addClass('catalog__content_first_active'); // 4
});

//humburger
$(document).on('ready',function() {
  $('.humburger').on('click',function() {
      $('.humburger, .header__menu').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
      $('body').toggleClass('fixed-page');
  });
});