$(document).ready(function() {

/*===================================
/* { 01 } => Home Slider Carousel
/*===================================*/

    $('#home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        slideSpeed: 800,
        smartSpeed: 500,
        dots: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            900: {
                items: 1,
            }
        }
    });


/*===================================
/* { 02 } => Image Gallery Carousel
/*===================================*/

    $('#image-gallery').owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: false,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            900: {
                items: 4
            }
        }
    });

/*===================================
/* { 03 } => FancyBox PopUp
/*===================================*/

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },

        protect: true,

        vimeo: {
            color: 'f00'
        },

        spinnerTpl: '<div class="fancybox-loading"></div>',
    });


/*=====================================================================
/* { 04 } => Avoid 'console' errors in browsers that lack a console.
/*====================================================================*/

        var method;

        var noop = function () {};

        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];

        var length = methods.length;

        var console = (window.console = window.console || {});

        while (length--) {

            method = methods[length];

            // Only stub undefined methods.

            if (!console[method]) {

                console[method] = noop;
            }
        };

/*===================================
/* { 05 } => WoW Plugin Fire
/*===================================*/
        new WOW().init();

    });