const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.header-main__nav-next',
    prevEl: '.header-main__nav-previous',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    graggable: true,
  }, 
    hashNavigation: {
      watchState : true,
    },
});