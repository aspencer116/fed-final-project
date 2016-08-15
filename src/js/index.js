$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".parallax-one").css({
		bottom: -80 + (scroll/8)
    //fill: black;
    //     -ms-transform: translateY(80);
    // -webkit-transform: translateY(80);
    //         transform: translateY(80);
    //transform: translateY(scroll)
	});
});
