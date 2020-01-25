$(document).ready(function(){


$('.collapse ul li').click(function(){
   
   $('.collapse ul  > li').removeClass('active');
   $(this).addClass('active');

});
 $('.carousel').carousel({
 	interval:2000
 });

 	$(window).scroll(function(){

 			if($(window).scrollTop() >= 600)
 			{
 					$('.btn-scroll').slideDown(1000);
 			}
 			else
   				$('.btn-scroll').slideUp(1000);

 	});
 	$('.btn-scroll').click(function(){
 		$('html, body').animate({scrollTop:0},1000);

 	});
});



$(window).on('load', function() { 

	$('.lds-hourglass').fadeOut(3000,function(){

		$('.loading').slideUp(2000,function() {

			$('.loading').remove();
		});
		$('body').css('overflow','auto');
	});


 });


