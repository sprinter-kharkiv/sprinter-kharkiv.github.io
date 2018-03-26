
$(document).ready(function () {

    $('.menu-trigger').on('click', function () {
        $('.header').toggleClass('vis-menu');
        $('.wrapper').toggleClass('vis-menu')
    });
    $('.navigation_link').on('click', function(){
        $('.header').removeClass('vis-menu');
        $('.wrapper').removeClass('vis-menu')
    });


    var $page = $('html, body');
    $('a[href*="#"]').click(function(){ 
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false; });

    if($page.scrollTop() == 0){
		$('.scroll-top').removeClass('visible');
    }

});

var scrollTop = $(window).scrollTop();

$(window).scroll(function() {
    if($(window).scrollTop() < scrollTop && $(window).scrollTop() >= 500){
        $('.scroll-top').addClass('visible');
        scrollTop = $(window).scrollTop();
    } else{
        $('.scroll-top').removeClass('visible');
        scrollTop = $(window).scrollTop();
    }
});