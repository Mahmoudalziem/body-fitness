$(document).ready(function () {


/*=================================================
/* { 01 } =>  Navbar Header Add-Background
/*================================================ */

    $(window).scroll(function(){

        if($(window).scrollTop() > 50){

            $('.header').css({

                background :'#000',
                "box-shadow": "0 4px 12px -4px rgba(255, 255, 255, 0.75)"
            })}

            else{

                $('.header').css({

                    background :'transparent',
                    "box-shadow": "none"
                })
            }
    })
/*=================================================
/* { 02 } =>  schedule-section Add Class Active
/*================================================ */

    $('.schedule-section .timetable_filtering ul li').click(function () {

        $(this).siblings().removeClass('active');

        $(this).addClass('active');
    });

/*=================================================
/* { 03 } =>  Preloader FadeOut
/*================================================ */

    $(window).on('load', function () {

        $('.preloader').fadeOut();
    });

/*=================================================
/* { 04 } =>  Scroll-Top FadeIn && Onclick
/*================================================ */

    $(window).scroll(function () {

        if ($(window).scrollTop() > 300) {

            $('.scroll-top').fadeIn();

        } else {

            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').on('click', function () {

        $('html,body').animate({

            scrollTop: 0

        }, 600)
    });
    
/*=================================================
/* { 05 } =>  Modify category-list Syle
/*================================================ */

    $(function(){
        var x = $('.recent-single-blog .category-list ul li .collapse');

        x.css({
            'padding-left' : '22px',
        });
        x.children().css({
            color: "gray",
        })
    });
});
