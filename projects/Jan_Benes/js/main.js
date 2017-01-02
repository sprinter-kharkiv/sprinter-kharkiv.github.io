$(window).load(function () {

  /*  (function () {
        var v = document.getElementsByTagName('video')[0];
        var t = document.getElementById('time');
        v.addEventListener('timeupdate', function (event) {
            t.innerHTML = parseInt(v.currentTime) + ' - ' + v.currentTime;
        }, false);
    })();
*/

    var video_1 = document.getElementById('whitebox'),
        brake_1 = 2.2,
        brake_2 = 4.4,
        brake_3 = 6.1,
        stop = 5.7,
        brake = brake_1;

    video_1.addEventListener("timeupdate", function () {

        if (this.currentTime >= brake) {
            this.pause();
        }
        else if (this.currentTime >= stop) {
            $(this).animate({opacity:'0'}, 500);
            $('.trig_2').css('display', 'none');
            $('.present_link').css('display', 'table').animate({opacity:'1'}, 500);
        }
    });
    $('.present-video').click(function () {
        video_1.play();
        $('.trig_1').css('display', 'block');
    });
    $('.trig_1').click(function () {
        video_1.play();
        brake = brake_2;
        $(this).css('display', 'none');
        $('.trig_2').css('display', 'block');
    });
    $('.trig_2').click(function () {
        video_1.play();
        brake = brake_3;
    });


});
