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
  
  // 모바일 버전에서만 토글 클릭 후 화면 보이게
  let w_width;

  // 브라우저의 크기가 변하면 함수내용을 실행한다.
  $(window).resize(function(){
    w_width = $(window).innerWidth();
    if(w_width>=767){
      $('.m_gnb_wrap').hide();
    }
  }).resize();

  // 토글 버튼 클릭시 gnb 노출
  let toggle = $('#toggle');
  
  toggle.click(function(){
    $('.sub, .sub_back').stop().fadeToggle();
  });
  $(window).resize(function(){
    w_width = $(window).innerWidth();
    if(w_width<=768){
      $('.sub, .sub_back').hide();
    }
  }).resize();
  $(window).resize(function(){
    w_width = $(window).innerWidth();
    if(w_width>=1025){
      $('.sub, .sub_back').hide();
    }
  }).resize();

  // 모바일 토글
  let m_toggle = $('#m_toggle');
  let m_menu = $('.m_gnb > li:not(:first-child) > a');

  m_toggle.click(function(){
    $('.m_gnb_wrap').fadeIn();
    $('.c_btn').click(function(){
      $('.m_gnb_wrap').fadeOut();
    });
  });
  m_menu.click(function(){
    $(this).next().slideToggle().parent().siblings().find('.m_sub').hide();
    $('i').removeClass('rotate');
    $(this).find('i').addClass('rotate');
  });


});