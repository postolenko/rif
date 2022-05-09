var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".portfolio_slider").length > 0 ) {
        $(".portfolio_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            // fade: true,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
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

});