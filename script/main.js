// 외부 스크립트

$(document).ready(function(){
  // 1. 검색박스 밑 추천 단어 슬라이드
  $('.word_inner > ul > li:last-child').insertBefore('.word_inner > ul > li:first-child');
  $('.word_inner > ul').css('margin-left','-122px');
  function moveLeft(){
    $('.word_inner > ul').animate({'margin-left':'-244px'},300,
    function(){
      $('.word_inner > ul > li:first-child').insertAfter('.word_inner > ul > li:last-child');
      $('.word_inner > ul').css('margin-left','-122px');
    });
  }
  let Timer = setInterval(moveLeft, 3000);

  $('#gwangju').click(function(){
    alert('준비된 축제가 없습니다.');
    return false;
  });
  $('#ulsan').click(function(){
    alert('준비된 축제가 없습니다.');
    return false;
  });
  $('#ulleung').click(function(){
    alert('준비된 축제가 없습니다.');
    return false;
  });
  $('#dokdo').click(function(){
    alert('준비된 축제가 없습니다.');
    return false;
  });



});

