/* ページTOP */
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 500; // スクロール速度(ミリ秒)
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

/* TOPページファーストビューからの切り替え */
$(window).on('load scroll', function() {
  add_class_in_scrolling_header($('main'));
});

function add_class_in_scrolling_header(target) {
    var winScroll = $(window).scrollTop();
    var targetOffset = target.offset().top;
    if(targetOffset < 0){
      targetOffset = 0;
    }
    if(targetOffset < winScroll) {
      $('header').removeClass('mv-view');
      $('.scroll-top').addClass('active');
    }else{
      $('header').addClass('mv-view');
      $('.scroll-top').removeClass('active');
    }
}

/* スマホメニュー */
var width = $(window).width();

$(function (){
  var menu = $('nav'),
    menuBtn = $('.btn_menu,.btn_sp'),
    body = $(document.body),
    menuWidth = menu.outerWidth();

  $('html').removeClass('scroll-prevent');

  menuBtn.on('click', function(){
    if(width <= 766){
      body.toggleClass('open');
      $('html').toggleClass('scroll-prevent');
      if(body.hasClass('open')){
        $('header').addClass("spmenu_active");
      } else {
        $('header').removeClass("spmenu_active");
      }
    }
  });
});
