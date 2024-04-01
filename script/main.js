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


  // 토글 버튼 클릭시 gnb 노출
  let toggle = $('#toggle');
  let sub = $('.sub');
  
  toggle.click(function(){
    $('.sub, .sub_back').stop().fadeToggle();
  });

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

  // 지도 클릭시 배경화면 지정
  let m_btn01 = $('.btn01');
  let m_btn02 = $('.btn02');
  let m_btn03 = $('.btn03');
  let m_btn04 = $('.btn04');
  let m_btn05 = $('.btn05');
  let m_btn06 = $('.btn06');
  let m_btn07 = $('.btn07');
  let m_btn08 = $('.btn08');
  let m_btn09 = $('.btn09');
  let m_btn10 = $('.btn10');
  let m_btn11 = $('.btn11');
  let m_btn12 = $('.btn12');
  let m_btn13 = $('.btn13');
  let m_btn14 = $('.btn14');
  let m_btn15 = $('.btn15');
  let m_btn16 = $('.btn16');
  let m_btn17 = $('.btn17');
  let m_btn18 = $('.btn18');
  let m_btn19 = $('.btn19');
  let m_btn = $('.btn');
  m_btn.click(function(){
    $(this).siblings().css('background','none').css('color','#333');
    $(this).css('background','#f00');
    $(this).css('color','#fff');
  });
  // m_btn01.click(function(){
  //   $(this).css('background','#f00');
  //   $(this).css('color','#fff');
  // });

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

