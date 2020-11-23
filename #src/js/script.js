
$(window).scroll(startCounter);

function startCounter() {
    if ($(window).scrollTop() > 2890 ) {
        $(window).off('scroll', startCounter);
        $('.counter').each(function() {
            let $this = $(this);
            countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 4000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                }
            });
        });
    }
};
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
  });
