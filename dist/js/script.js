let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // loop: true,
      spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
  let swiper = new Swiper('.swiper-header', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-header',
      clickable: true,
    },
  });