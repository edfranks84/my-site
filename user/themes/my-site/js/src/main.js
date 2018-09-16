$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors: ['welcome', 'interventus', 'vaujany', 'mcfeggan-brown', 'mark-todd', 'lifepoint', 'tasty-media', 'about', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Welcome', 'Interventus', 'Vaujany', 'Mcfeggan Brown', 'Mark Todd', 'Lifepoint', 'Tasty Media', 'About', 'Contact'],
        sectionSelector: '.home-section',
        showActiveTooltip: true,
        touchSensitivity: 10,
        responsiveWidth: 740
    });

    var scroll = new SmoothScroll('[data-scroll]');
    $(function() {
        $(document).trigger("enhance");
        $("section").porthole();
    });

    $(".hero__content h1").lettering();

    $(".main-nav li").each(function(i, el) {
        $(el).css("animation-delay", i * 200 + 800 + "ms");
    });
    $(".side-nav__icons a").each(function(i, el) {
        $(el).css("animation-delay", i * 350 + 800 + "ms");
    });
    $(".hero__content h1 span").each(function(i, el) {
        $(el).css("animation-delay", i * 200 + 700 + "ms");
    });

    $(".project-item").on('click', function() {
        $(".project-item").removeClass("active");
        $(this).addClass("active");
    });

    // var rellax = new Rellax('.rellax');

    // $(window).load(function() {
    //     $('body').addClass("page-loaded");
    // })
    window.onload = function() {
        setTimeout(function() {
            $("body").addClass("page-load");
            setTimeout(function(){
                $("body").removeClass("page-load");
                $("body").addClass("page-loading");
                $(".loader").fadeOut();
                setTimeout(function(){
                    $("body").removeClass("page-loading");
                    $("body").addClass("page-loaded");
                },600);
            },600);
        }, 1200);
    };

});