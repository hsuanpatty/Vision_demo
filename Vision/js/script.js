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
  if (isClickScrolling) return;

  let scrollTop = $(window).scrollTop();
  let windowH = $(window).height();

  // 🔥 滑到最頂：全部熄滅（不亮中西歐）
  if (scrollTop <= 10) {
    $('.scroll-tag li').removeClass('on');
    return;
  }

  let activeIndex = -1;

  scrollItem.each(function (index) {
    let itemTop = $(this).offset().top;

    // ✅ 使用畫面中線判斷
    if (itemTop <= scrollTop + windowH / 2) {
      activeIndex = index;
    }
  });

  if (activeIndex !== -1) {
    $('.scroll-tag li')
      .removeClass('on')
      .eq(activeIndex)
      .addClass('on');
  }
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
