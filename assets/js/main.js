(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
          
    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.school__slider').owlCarousel({
                items: 3,
                loop: false,
                margin: 30,
                dots: true,
                autoplay: false,
                mouseDrag: false,
                nav: false,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                // navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],

                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        autoplay: false,
                        mouseDrag: true,
                        loop: true,
                         
                    },
                    600:{
                        items:2,
                        autoplay: false,
                        mouseDrag: true,
                        loop: true,
                    },
                    1000:{
                        items:3,

                    }
                }
            });
        }

    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.activity__slider').owlCarousel({
                items: 3,
                loop: false,
                margin: 30,
                dots: true,
                autoplay: false,
                mouseDrag: false,
                nav: false,
                animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                // navText: ["<i class='zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],

                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        autoplay: true,
                        mouseDrag: true,
                         
                    },
                    600:{
                        items:2,
                        autoplay: true,
                         mouseDrag: true,
                    },
                    1000:{
                        items:3,

                    }
                }
            });
        }

   	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.educator__slide').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                dots: true,
                autoplay: false,
                nav: true,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                navText: ['<img src="./assets/img/slider-arrow-left.svg" alt="">', '<img src="./assets/img/slider-arrow-right.svg" alt="">'],
            });
        }


    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.team__slider').owlCarousel({
                items: 4,
                loop: true,
                margin: 30,
                dots: true,
                autoplay: false,
                mouseDrag: true,
                nav: true,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                navText: ['<img src="./assets/img/slider-arrow-left.svg" alt="">', '<img src="./assets/img/slider-arrow-right.svg" alt="">'],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        // center: true,
                        margin:10,
                        stagePadding: 50
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4

                    }
                }
            });
        }


//  $(".owl-carousel").owlCarousel({
    
//  });
      $('[data-toggle="tab"]').on('shown.bs.tab', function (e) { });

    	/*====  slider ative =====*/
        if ($.fn.owlCarousel) {
            $('.video__carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 30,
                dots: true,
                autoplay: false,
                nav: true,
                // animateOut: 'fadeOut',
                // autoplayTimeout: 12000,
                smartSpeed: 900,
                navText: ['<img src="./assets/img/slider-arrow-left.svg" alt="">', '<img src="./assets/img/slider-arrow-right.svg" alt="">'],
            });
        }



        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });




      });
  
    /*====  Window Load Function =====*/
    jQuery(window).load(function(){


    });


}(jQuery));	