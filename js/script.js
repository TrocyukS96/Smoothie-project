$(document).ready(function() {
   $('.burger__menu').click(function(event) {
      $('.burger__menu, .header__novigation').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:3000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});