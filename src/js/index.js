$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var scroll_1 = scroll/8;
  var scroll_2 = scroll/3;
	$(".parallax-one").css({
		bottom: -80 + (scroll_1)
    //     -ms-transform: translateY(80);
    // -webkit-transform: translateY(80);
    //         transform: translateY(80);
    //transform: translateY(scroll)
	});
  $("#lion--element__1").css({
		bottom: 30 + (scroll_2)
  });
  $("#lion--element__2").css({
		bottom: -10 + (scroll_2)
  });
  $("#lion--element__3").css({
		bottom: -50 + (scroll_2)
  });
  $("#lion--element__4").css({
		bottom: -120 + (scroll_2)
  });
});
