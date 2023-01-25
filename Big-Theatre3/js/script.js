


$(document).ready(function() {
  $('.header-menu__burger,.header-menu__back') .click(function(event) {
      $('.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// $(document).ready(function() {
//   $('.top-line__icon-phone') .click(function(event) {
//       $('.top-line__info,.top-line').toggleClass('phone-active');
//   });
// });


  
  //...or JQuery: 
  function ibg(){
  
  $.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
  });
  }
  
  ibg();

  