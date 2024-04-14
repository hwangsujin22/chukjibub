// 공통 스크립트

$(document).ready(function(){
  // top버튼 스크롤 위치에 따라 보이기/숨기기----------------------------------
  let scrollPos;
  $(window).scroll(function(){
    scrollPos = $(this).scrollTop();
    // console.log(scrollPos);

    if(scrollPos>=700){
      $('.top_btn_box').addClass('act');
    }else{
      $('.top_btn_box').removeClass('act');
    }
    return false;
  });

  $('.top_btn_box').click(function(){
    $('html, body').animate({'scrollTop':'0px'},300);
  });
  
});