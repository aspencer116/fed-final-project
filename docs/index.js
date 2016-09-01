//Scroll speed adjustments for the svg characters
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var scroll_1 = scroll/10;
  var scroll_2 = scroll/6;
  var scroll_3 = scroll/3;

  $("#c-lion__back").css({
    bottom: 0 + (scroll_1)
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

//Sticky nav
$(document).ready(function(){
  $(window).resize(function(){
    //Add classes when JS loads to turn off default sticy nav
    $('.c-action').addClass('c-action__jsload');
    $('.c-hero__container').addClass('c-hero__container--jsload');

    // Variables
    var windowHeight = $(window).height();
    console.log(windowHeight);
    var toggle = .80 * windowHeight;

    // When the document is scrolled 85%, toggle the classes
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

}); //jQuery

//smooth scrolling
$(function() {
  var $window = $(window), $document = $(document),
    transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
    scrollTime = 1.25; // scroll time in seconds

  $(document).on("click", "a[href*=#]:not([href=#modal])", function(e) {
    var target, avail, scroll, deltaScroll;

    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

      if (target.length) {
        avail = $document.height() - $window.height();

        if (avail > 0) {
          scroll = target.offset().top;

          if (scroll > avail) {
            scroll = avail;
          }
        } else {
          scroll = 0;
        }

        deltaScroll = $window.scrollTop() - scroll;

        // if we don't have to scroll because we're already at the right scrolling level,
        if (!deltaScroll) {
          return; // do nothing
        }

        e.preventDefault();

        if (transitionSupported) {
          $("html").css({
            "margin-top": deltaScroll + "px",
            "transition": scrollTime + "s ease-in-out"
          }).data("transitioning", scroll);
        } else {
          $("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
          .animate({
            scrollTop: scroll + "px"
          }, scrollTime * 1000);

          return;
        }
      }
    }
  });

  if (transitionSupported) {
    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
      var $this = $(this),
        scroll = $this.data("transitioning");

      if (e.target === e.currentTarget && scroll) {
        $this.removeAttr("style").removeData("transitioning");

        $("html, body").scrollTop(scroll);
      }
    });
  }
});
