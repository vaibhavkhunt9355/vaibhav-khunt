
$(document).ready(function(){
    $("#slider_1").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        items:2,
        dots:true,
        dotsEach:true,
        // autoplay:true,
        // autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }

    })

    
    $('#slider_2').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        dots:false,
        // autoplay:true,
        // autoplayTimeout:1000,
        navText: ['<i class="fa-solid fa-circle-arrow-left"></i>', '<i class="fa-solid fa-circle-arrow-right"></i>'],
    
    });
  });