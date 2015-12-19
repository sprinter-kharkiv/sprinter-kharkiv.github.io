$(document).ready(function(){
  $('.j-slider').bxSlider({
	  mode: 'fade',
	  auto: true,
	  autoControls: true,
	  pager: false
	});

  $(".start-bg-image").each(function(){
  	  var $bgobj = $(this);

  	  $(window).scroll(function(){
  	  	  var yPos = -($(window).scrollTop() /  $bgobj.data("speed"));
  	  	  var coords = "50%" + yPos + "px";

  	  	  $bgobj.css(
  	  	  	  "background-position" , coords);
  	})
  })
});


