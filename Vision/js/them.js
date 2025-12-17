// header banner
$(".banner-img").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,       // 左右箭頭
  dots: false,         // 頁籤
  infinite: true,      // loop
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 576,   // max-width: 575px 以下
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
