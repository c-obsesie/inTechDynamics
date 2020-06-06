// Slick Carousel
$(document).on("ready", function () {
  $(".single-item").slick({
      lazyLoad: "ondemand", // ondemand progressive anticipated
      infinite: true,
      prevArrow:
        '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow:
        '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
    });
  });

//   Change navbar Logo Collor and Height
$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) { 
            $('.navbar .navbar-brand img').attr('src','/assets/PNG White Print.png');
            $('.navbar').addClass('scrolled')
             $('.navbar-brand ').addClass('small')
            

        }
        if ($(this).scrollTop() < 1) { 
            $('.navbar .navbar-brand img').attr('src','/assets/Intech Logo.png');
            $('.navbar').removeClass('scrolled')
             $('.navbar-brand ').removeClass('small')
        }
    })
});