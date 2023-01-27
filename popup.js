$(document).ready(function () {
  //btn-clo 클릭하면 기능이 발생한다.
  $('.btn').click(function () {
    //팝업창이 꺼진다.
    $('.popup').removeClass('active');
    $('.main-img').removeClass('active');
  });
});
