
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
  let swiper = new Swiper('.swiper-header', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const anchors = document.querySelectorAll('a[href*="#"]')
  for( let anchor of anchors) {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      const blockID = anchor.getAttribute('href')
      const fixedHeaderHeight = 92;
      const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;
      window.scrollTo({
        top,
        left: 0,
        behavior: "smooth",
      })
    })
  };

  // for (let anchor of anchors) {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault()
      
  //     const blockID = anchor.getAttribute('href').substr(1)
      
  //     document.getElementById(blockID).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   })
  // };

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
    if (btn.classList.contains('active-btn')) return;
    let btns = document.querySelectorAll('.filter button');

    // for (let i = 0; i < btns.length; i++) {
    //     let btn = btns[i];
    //     if (btn.classList.contains('active')) {
    //         btn.classList.remove('active');
    //     }
    // }
let arrBtns = Array.prototype.slice.call(btns);

    removeClass(arrBtns, 'active-btn');

    btn.classList.add('active-btn');

    let btnId = btn.id;
    let blocks = document.querySelectorAll('.block')
    let arrBlocks = Array.prototype.slice.call(blocks);

    removeClass(arrBlocks, 'hide');
    if (btnId == 'all') return;

    arrBlocks
    .filter(block => (block.dataset.var != btnId))
    .map(block => block.classList.add('hide'));
});
jQuery("document").ready(function($){
 
	var nav = $('header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 960) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	})
});


$(window).scroll(function(){
  var $sections = $('section');
$sections.each(function(i,el){
 var top  = $(el).offset().top-100;
 var bottom = top +$(el).height();
 var scroll = $(window).scrollTop();
 var id = $(el).attr('id');
if( scroll > top && scroll < bottom){
     $('a.active').removeClass('active');
$('a[href="#'+id+'"]').addClass('active');

 }
})
});


