$(document).ready(function() {
   $('.burger__menu').click(function(event) {
      $('.burger__menu, .header__novigation').toggleClass('active');
      $('body').toggleClass('lock');
   });
});