$(document).ready(function() {
    // var swiper = new Swiper('.swiper-container', {
    //     mousewheel: true,
    //     freeMode: true,
    //     slidesPerView: 4,
    //     spaceBetween: 0,
    //     direction: 'vertical',
    //     // Responsive breakpoints
    //     breakpoints: {
    //         // when window width is <= 320px
    //         320: {
    //             slidesPerView: 1,
    //             direction: 'vertical'
    //         },
    //         // when window width is <= 480px
    //         800: {
    //             slidesPerView: 2,
    //             direction: 'horizontal'
    //         },
    //         // when window width is <= 640px
    //         2000: {
    //             slidesPerView: 3
    //         }
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'progressbar',
    //     }

    // });
    

    var mySwiper = undefined;

    function initSwiper() {

        function isPortrait() {
            return window.innerHeight > window.innerWidth;
        }
        function isLandscape() {
            return window.innerHeight < window.innerWidth;
        }

        var screenWidth = $(window).width();
        if (typeof mySwiper != 'undefined') {
            mySwiper.destroy();
            mySwiper = undefined;
        }
        if (screenWidth < 620 || isPortrait()) {
            mySwiper = new Swiper('.swiper-container', {
                spaceBetween: 10,
                freeMode: true,
                direction: 'vertical',
                slidesPerView: 3
                //pagination: {
                  //  el: '.swiper-pagination',
                    //type: 'fraction',
                //}
            });
        } else if (screenWidth > 621 && isLandscape()) {

            mySwiper = new Swiper('.swiper-container', {
                mousewheel: true,
                freeMode: true,
                slidesPerView: 3.1,
                spaceBetween: 10,
                direction: 'horizontal',
                // Responsive breakpoints
                breakpoints: {
                    // when window width is <= 480px
                    920: {
                        slidesPerView: 2.1,
                    }
                    // when window width is <= 640px
                    // 621: {
                    //     slidesPerView: 2,
                    // }
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                }

            });
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initSwiper();
    });

    $(".project-item").click(function() {
      window.location = $(this).find("a").attr("href"); 
      return false;
    });


});