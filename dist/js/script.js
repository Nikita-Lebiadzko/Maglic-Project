
//   $(document).ready(function() {
//     $('.header-burger').click(function(event) {
//         $('.header-burger,.list').toggleClass('active')  
//     });
// });

$(window).scroll(startCounter);

function startCounter() {
    if ($(window).scrollTop() > 2390 ) {
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

let header__burger = document.querySelector('.header-burger');
let header_menu = document.querySelector('.list');
let back = document.querySelector('body');
let header__list = document.querySelector('.list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}

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
  var avatarSwiper = new Swiper('.swiper-avatar', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  let btnsFilterContainer = document.querySelector('.filter'); 
  let removeClass = function(arr, className){
      arr
      .filter(btn => btn.classList.contains(className))
      .map(btn => btn.classList.remove(className));
  };
  
  btnsFilterContainer.addEventListener('click', function(e) {
      let target = e.target;
      if (!e.target.closest('button')) return;
      let btn = e.target.closest('button');
      if (btn.classList.contains('active')) return;
      let btns = document.querySelectorAll('.filter button');
  
  
  let arrBtns = Array.prototype.slice.call(btns);
  
      removeClass(arrBtns, 'active');
  
      btn.classList.add('active');
  
      let btnId = btn.id;
      let blocks = document.querySelectorAll('.block')
      let arrBlocks = Array.prototype.slice.call(blocks);
  
      removeClass(arrBlocks, 'hide');
      if (btnId == 'all') return;
  
      arrBlocks
      .filter(block => (block.dataset.var != btnId))
      .map(block => block.classList.add('hide'));
  });
  


