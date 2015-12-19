/**
 * Created by Admin on 25.11.2015.
 */
$(document).ready(function() {

    // Mobile menu
    $('.j-menu-trig').on('click', function () {
        $('.menu').toggleClass('vis-menu')
    });

    // Init dot-dot-dot
    $('.dot3').dotdotdot({
        after: 'a.readmore'
    });

    // Background scroll
    $(".j-bg-scroll").each(function(){
        var $bgobj = $(this);

        $(window).scroll(function(){
            var yPos = -($(window).scrollTop() /  $bgobj.data("speed"));
            var coords = "50%" + yPos + "px";

            $bgobj.css(
                "background-position" , coords);
        })
    })
});