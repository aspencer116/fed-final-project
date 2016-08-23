//Scroll speed adjustments for the svg characters
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var scroll_1 = scroll/8;
  var scroll_2 = scroll/3;
	$(".parallax-one").css({
		bottom: -80 + (scroll_1)
	});
  $("#c-lion__element--1").css({
		bottom: 30 + (scroll_2)
  });
  $("#c-lion__element--2").css({
		bottom: -10 + (scroll_2)
  });
  $("#c-lion__element--3").css({
		bottom: -50 + (scroll_2)
  });
  $("#c-lion__element--4").css({
		bottom: -120 + (scroll_2)
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
