// $(document).ready(function() {

//     var rellax = new Rellax('.rellax');

// });


$(window).on("load", function(e) {
    if ($(window).width() > 820) {
        var rellax = new Rellax('.rellax');
        // $('.inner-pages__wrap').enllax();
        // $('.responsive-top').enllax();
        // $('.responsive-bottom').enllax();
        // $(function() {
            // var controller = new ScrollMagic.Controller();

            // build tween
            // var tweenTopImage = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".project-top__image", 1, { scale: 1 }, { scale: 2, ease: Linear.easeNone, force3D: true })
            //     ]);

            // new ScrollMagic.Scene({
            //     triggerElement: ".projet-top",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight
            // }).setTween(tweenTopImage).addTo(controller);

            // var tweenInner2 = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".project-inner__image:nth-child(3)", 1, { y: 100 }, { y: -200, ease: Linear.easeNone, force3D: true })
            //     ]);

            // new ScrollMagic.Scene({
            //     triggerElement: "#inner-pages",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight * 2.5
            // }).setTween(tweenInner2).addTo(controller);

            // var tweenMobileHome = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".mobile-home", 1, { y: 10 }, { y: 100, ease: Linear.easeNone, force3D: true })
            //     ]);

            // new ScrollMagic.Scene({
            //     triggerElement: ".responsive-project",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight * 2
            // }).setTween(tweenMobileHome).addTo(controller);

            // var tweenResponsiveTablet = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".tablet", 1, { y: 200 }, { y: -500, ease: Linear.easeNone, force3D: true })
            //     ]);
            // new ScrollMagic.Scene({
            //     triggerElement: ".responsive-project",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight * 3,
            //     // duration: 500,
            //     // offset: 75
            // }).setTween(tweenResponsiveTablet).addTo(controller);

            // var tweenResponsiveMobile1 = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".responsive-mobile:nth-child(1)", 1, { y: 30 }, { y: -50, ease: Linear.easeNone, force3D: true })
            //     ]);

            // new ScrollMagic.Scene({
            //     triggerElement: ".responsive-bottom",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight * 1.5
            // }).setTween(tweenResponsiveMobile1).addTo(controller);

            // var tweenResponsiveMobile2 = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".responsive-mobile:nth-child(2)", 1, { y: 100 }, { y: -350, ease: Linear.easeNone, force3D: true })
            //     ]);

            // new ScrollMagic.Scene({
            //     triggerElement: ".responsive-bottom",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight * 2
            // }).setTween(tweenResponsiveMobile2).addTo(controller);

            // var tweenResponsiveMobile3 = new TimelineMax()
            //     .add([
            //         TweenMax.fromTo(".responsive-mobile:nth-child(3)", 1, { y: 150 }, { y: -600, ease: Linear.easeNone, force3D: true })
            //     ]);

            // new ScrollMagic.Scene({
            //     triggerElement: ".responsive-bottom",
            //     triggerHook: "onEnter",
            //     duration: window.innerHeight * 2
            // }).setTween(tweenResponsiveMobile3).addTo(controller);

        // });

    }
});