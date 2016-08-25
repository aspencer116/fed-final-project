//Scroll speed adjustments for the svg characters
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var scroll_1 = scroll/10;
  var scroll_2 = scroll/6;
  var scroll_3 = scroll/3;

  $("#c-lion__back").css({
		bottom: -10 + (scroll_1)
	});
  $(".c-lion__element--1").css({
		bottom: 72 + (scroll_2)
  });
  $(".c-lion__element--2").css({
		bottom: 0 + (scroll_3)
  });
  $(".c-lion__element--3").css({
		bottom: -50 + (scroll_2)
  });
  $(".c-lion__element--4").css({
		bottom: -120 + (scroll_3)
  });
  $("#c-owl__back").css({
		bottom: 160 + (scroll_1)
	});
  $(".c-owl__element--1").css({
		bottom: 364 + (scroll_2)
  });
  $(".c-owl__element--2").css({
		bottom: -78 + (scroll_3)
  });
  $(".c-owl__element--3").css({
		bottom: -18 + (scroll_2)
  });
  $(".c-owl__element--4").css({
		bottom: -100 + (scroll_3)
  });
  $("#c-elephant__back").css({
		bottom: 120 + (scroll_1)
	});
  $(".c-elephant__element--1").css({
		bottom: -102 + (scroll_3)
  });
  $(".c-elephant__element--2").css({
		bottom: -78 + (scroll_2)
  });
  $(".c-elephant__element--3").css({
		bottom: 99 + (scroll_3)
  });
  $(".c-elephant__element--4").css({
		bottom: 300 + (scroll_2)
  });
});

//Product tile functionality


//Sticky nav
$(document).ready(function(){
  $(window).resize(function(){

    // Variables
    var windowHeight = $(window).height();
    console.log(windowHeight);
    var toggle = .85 * windowHeight;

    // When the document is scrolled 85%, toggle the classes
    // Does not work in iOS 7 or below
    // Hasn't been tested in iOS 8
    $(document).scroll(function(){

      // Store the document scroll function in a variable
      var y = $(this).scrollTop();

      // If the document is scrolled 85%
      if( y > toggle) {

        // Add the "sticky" class
        $('.c-action').addClass('c-action__top');
      } else {
        // Else remove it.
        $('.c-action').removeClass('c-action__top');
      }
    });

  // Call it on resize to ensure the vh gets loaded correctly
  }).resize();

}); // jQuery
