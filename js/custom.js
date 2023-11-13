//Pre loader
/*
$(window).load(function () {
  $(".preloader").fadeOut(0);
});
*/
$(document).ready(function () {
  // Ocultar el menu en mobile cuando se hace click en algun enlace
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Smoothscroll js
  $(function () {
    $(".navbar-default-b a").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // Slide show
  $(function () {
    $("body").vegas({
      slides: [
        { src: "images/slide-img1.jpg" },
        { src: "images/slide-img2.jpg" },
        { src: "images/slide-img3.jpg" },
      ],
      timer: false,
      transition: ["zoomIn"],
      animation: ["kenburns"],
    });
  });

  // Carrousel
  /* $(document).ready(function() { */
  $(".owl-carousel").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    slideSpeed: 300,
    itemsDesktop: [1199, 2],
    itemsTablet: [768, 1],
    itemsTabletSmall: [985, 2],
    itemsMobile: [479, 1],
    autoPlay: true,
    stopOnHover: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left' style='color: #FFF;'></i>",
      "<i class='fa fa-angle-right' style='color: #FFF;'></i>",
    ],
  });
  /* }); */

  // Volver arriba
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });

  // animacion de scroll hacia arriba
  $(".go-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  // Wow js
  new WOW({ mobile: false }).init();
});
