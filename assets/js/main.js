(function ($) {
  ("use strict");

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on("load", function () {
    $(window).trigger("scroll");
    $(window).trigger("resize");
    preloader();
    AOS.init();
  });

  $(function () {
    $(window).trigger("resize");
    mainNav();
    stickyHeader();
    dynamicBackground();
    swiperInit();
    modalVideo();
    scrollUp();
    textAnimation();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });

/*-------------------------------------------------
      1. preloader  
 --------------------------------------------------------------*/

  function preloader() {
    setTimeout(function () {
      $("#preloader").addClass("loaded");
      if ($("#preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(850)
          .queue(function () {
            $(this).remove();
          })
          .fadeOut();
      }
    }, 200);
  }

/*--------------------------------------------------------------
     7. Scroll Up
--------------------------------------------------------------*/
  function scrollUp() {
    $(".ak-scrollup").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });
  }
  // For Scroll Up
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".ak-scrollup").addClass("ak-scrollup-show");
    } else {
      $(".ak-scrollup").removeClass("ak-scrollup-show");
    }
  }

 
})(jQuery);
