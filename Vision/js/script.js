// ============================
// goTop按鈕
// ============================
var goTopButton = $('#goTop');

goTopButton.click(function () {
  $('html,body').animate({ scrollTop: 0 }, 800);
});

$(window).on('scroll resize reload', function () {
  if ($(window).scrollTop() > $(window).height()) {
    goTopButton.show();
  } else {
    goTopButton.fadeOut();
  }
});

// ============================
// Scroll Spy + Click Scroll
// ============================
let scrollTarget = $('.scroll-target');
let scrollItem = scrollTarget.children('section');
let menuHeight = $('.menu-height').outerHeight();
let isClickScrolling = false; // 🔒 關鍵鎖

console.log(`nav高: ${menuHeight}px`);

// 🔹 Scroll Spy（單一監聽）
$(window).on('scroll resize reload', function () {
  if (isClickScrolling) return; // 🚫 點擊動畫中不處理

  let scrollTop = $(window).scrollTop();
  let windowH = $(window).height();

  scrollItem.each(function () {
    let _this = $(this);
    let scrollItemT = _this.offset().top;
    let thisIndex = _this.index();

    // ✅ 使用畫面中線判斷（不會過早跳）
    if (scrollItemT <= scrollTop + windowH / 2) {
      $('.scroll-tag li').removeClass('on');
      $('.scroll-tag li').eq(thisIndex).addClass('on');
    }
  });
});

// 🔹 點擊選單
$('.scroll-tag').find('li').click(function () {
  let clickNum = $(this).index();
  let menuHeight = $('.menu-height').outerHeight();
  let targets = scrollTarget.children('section');

  isClickScrolling = true; // 🔒 鎖住 scroll spy

  $('.scroll-tag li').removeClass('on');
  $(this).addClass('on');

  $('html,body').stop().animate(
    {
      scrollTop: targets.eq(clickNum).offset().top - menuHeight
    },
    800,
    function () {
      isClickScrolling = false; // 🔓 動畫結束才放行
    }
  );
});
