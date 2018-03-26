
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

$(window).bind('mousewheel', function(event) {
	var st = $(this).scrollTop();
if (event.originalEvent.wheelDelta >= 0 && st >= 600) {
	$('.scroll-top').addClass('visible');
}
else {
    $('.scroll-top').removeClass('visible');
};
});
$('.scroll-top').on('click', function(){
	$('.scroll-top').removeClass('visible');
})