$(".box").mouseover(function(){
  // mouseover 한 그 박스의 video 를 재생하기
  $(this).find("video").get(0).play();
})

$(".box").mouseout(function(){
  // mouseout 한 그 박스의 video 를 재생 멈추기
  $(this).find("video").get(0).pause();
})

$(".box1").click(function(){
  $(".page1").addClass("on");
})
$(".box2").click(function(){
  $(".page2").addClass("on");
})
$(".box3").click(function(){
  $(".page3").addClass("on");
})
$(".box4").click(function(){
  $(".page4").addClass("on");
})
$(".close").click(function(){
  $(".page").removeClass("on");
})