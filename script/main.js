// 외부 스크립트

$(document).ready(function(){
  // 1. 검색박스 밑 추천 단어 슬라이드
  $('.word_inner > ul > li:last-child').insertBefore('.word_inner > ul > li:first-child');
  $('.word_inner > ul').css('margin-left','-123px');
  function moveLeft(){
    $('.word_inner > ul').animate({'margin-left':'-246px'},300,
    function(){
      $('.word_inner > ul > li:first-child').insertAfter('.word_inner > ul > li:last-child');
      $('.word_inner > ul').css('margin-left','-123px');
    });
  }
  let Timer = setInterval(moveLeft, 3000);

  // 없는 콘텐츠 알림
  $('#gwangju').click(function(){
    alert('광주 : 준비된 축제가 없습니다.');
    return false;
  });
  $('#ulsan').click(function(){
    alert('울산 : 준비된 축제가 없습니다.');
    return false;
  });
  $('#ulleung').click(function(){
    alert('울릉도 : 준비된 축제가 없습니다.');
    return false;
  });
  $('#dokdo').click(function(){
    alert('독도 : 준비된 축제가 없습니다.');
    return false;
  });

  // 공지사항 이벤트 슬라이드
  let e_slide = $('.event_list > div');
  i = 0;
  function fade_slide(){
    e_slide.fadeOut();
    if(i==2){
      i=0;
    }else{
      i++;
    }
    e_slide.eq(i).fadeIn();
  }

  let e_Timer = setInterval(fade_slide, 3000);

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

