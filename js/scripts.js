var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getScrollBtnParams() {
  if($(document).scrollTop() > $(window).height()) {
    $(".up_btn").addClass("visible");
  } else {
    $(".up_btn").removeClass("visible");
  }
}

function getFooterNavParams() {
  if(bodyWidth <= 900) {
    $(".footer_nav_inline li").removeClass("active");
    $(".sub_menu_2").removeClass("active");
    $(".sub_menu_2").slideUp(300);
  }
}

$(window).load(function() {

});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getScrollBtnParams();
  getFooterNavParams();
});

$(document).scroll(function() {
  getScrollBtnParams();
});

$(document).ready(function() {

    getScrollBtnParams();
    getFooterNavParams();

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    $(".main_nav .dr_btn").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest("li");
      if(parent.hasClass("active")) {
        $(".main_nav li").removeClass("active");
      } else {
        $(".main_nav li").removeClass("active");
        parent.addClass("active");
      }
    });

    $(".sub_menu .close_btn").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest("li");
      parent.removeClass("active");
    });

    $(document).mouseup(function(e) {
      hide_element = $(".main_nav li");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    // ------------------

    $(".dr_title + .dr_btn").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest("li");
      dr = parent.children(".sub_menu_2");
      if(dr.is(":hidden")) {
        $(".footer_nav .sub_menu_2").slideUp(300);
        $(".footer_nav li").removeClass("active");
        dr.slideDown(300);
        parent.addClass("active");
        dr.addClass("active");
      } else {
        dr.slideUp(300);
        parent.removeClass("active");
        dr.removeClass("active");
      }
    });

    // ------------------

    if( $(".item_slider").length > 0 ) {
        $(".item_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    // ------------------

    $(".prices_tabs").each(function() {
      activeTabFor = $(this).find(".tab_link.active").attr("for");
      $("#"+activeTabFor).prop("checked",true);
    });

    $(".tab_link").on("click", function() {
      parent = $(this).closest(".tabs_nav");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // ------------------

    // $(".placeholder").on("click", function(e) {
    //   e.preventDefault();

    //   $(".placeholder").each(function() {
    //     parent2 = $(this).closest(".input_wrapp");
    //     input2 = parent.find("input, select, textarea");
    //     if(input2.val() != "" || input2.is(":focus")) {
    //       parent2.addClass("active");
    //     } else {
    //       parent2.removeClass("active");
    //     }
    //     // if(input2.val() == "" || input2.focus() != true) {
    //     //   console.log("val = none");
    //     //   parent2.removeClass("active");
    //     // } else {
    //     //   parent2.addClass("active");
    //     // }
    //   });
    //   // parent = $(this).closest(".input_wrapp");
    //   // input = parent.find("input, select, textarea");
    //   // parent.addClass("active");
    //   input.focus();
      
    // });

    // -----------------

    if( $(".products_slider").length > 0 ) {

      $('.products_slider').on('init', function(event, slick, currentSlide){
        slickSlidesToScroll = slick.originalSettings.slidesToScroll;
        currentSlideIndex = parseInt($('.products_slider .slick-current .product_thumb').attr('data-slide-index'));
        currentSlides = Math.ceil( currentSlideIndex / slickSlidesToScroll );
        if(currentSlides < 10) {
          currentSlides = "0"+currentSlides;
        }
        $(".products_slide_num").text(currentSlides);
      });

      $('.products_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        slickSlidesToScroll = slick.originalSettings.slidesToScroll;
        currentSlideIndex = parseInt($('.products_slider .slick-current .product_thumb').attr('data-slide-index'));
        currentSlides = Math.ceil( currentSlideIndex / slickSlidesToScroll );
        if(currentSlides < 10) {
          currentSlides = "0"+currentSlides;
        }
        $(".products_slide_num").text(currentSlides);
      });

      $(".products_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 2,
          // infinite: false
          // fade: true,
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 470,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    if( $(".slider_1").length > 0 ) {
      $(".slider_1").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: false
          // fade: true,
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 590,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    if( $(".testimonial_slider").length > 0 ) {
      $(".testimonial_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: false
          // fade: true,
          responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    if( $(".clients_slider").length > 0 ) {
      $(".clients_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 2,
          // infinite: false
          // fade: true,
          responsive: [
              {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    // ------------------

    $(".up_btn").on("click", function(e) {
      e.preventDefault();
      $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // ------------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });

    $(".close_nav").click(function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});