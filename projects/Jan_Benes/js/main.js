﻿$(window).load(function () {

    var video_1 = document.getElementById('whitebox'),
        brake_1 = 2.2,
        brake_2 = 4.4,
        brake_3 = 6.0,
        stop = 5.7,
        brake = brake_1;

    video_1.addEventListener("timeupdate", function () {

            if (this.currentTime >= brake) {
                this.pause();
            }
            else if (this.currentTime >= stop) {
                $(this).animate({opacity: '0'}, 500);
                $('.trig_2').css('display', 'none');
                $('.present_link').css('display', 'table').animate({opacity: '1'}, 500);
                $('.tooltip').css('display', 'none');
            }
        }, false
    );


    $(window).bind('scroll.once', function () {
        tooltip_animated();
    });
    function tooltip_animated() {
        var scroll = $(window).scrollTop(),
            h_window = $(window).height(),
            v_top = $(video_1).offset().top,
            offset = h_window + scroll;

        if (offset >= v_top) {
            $('.tooltip').addClass('wobble');
        }
        $(window).unbind('scroll.once')
    }


    var marker = true;

    function first_start() {
        video_1.play();
        $('.trig_1').css('display', 'block');
        marker = false;
    }

    $('.present-video').swipe({
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (marker) {
                first_start();
            }
        }
    });


    $('.trig_1').swipe({
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            video_1.play();
            brake = brake_2;
            $(this).css('display', 'none');
            $('.trig_2').css('display', 'block');
        }
    });

    $('.trig_2').swipe({
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            video_1.play();
            brake = brake_3;
        }
    });

});

