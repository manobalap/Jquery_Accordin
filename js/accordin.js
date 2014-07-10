// JavaScript Document
$.fn.accordin = function(options) {
    $('.accordin h3').addClass('accord-header');
	$('.accordin h3+div').addClass('accord-content');
	$( ".accordin" ).on( "click", "h3", function() {
		if ($(this).next('div').hasClass("active")==false) {
			 $('.accord-content').slideUp();										 
			 $( this ).next('div').slideDown();
			 $('.accordin h3').removeClass('active-header')
			 $('.accord-content').removeClass('active');
			 $(this).addClass('active-header').next('div').addClass('active');
		}	
	});
	
	var defaults = {
					 collapse: true,
					 arrow: true
				   };
				   
	var settings = $.extend(defaults, options);
	return this.each( function(){
		if(settings.collapse)
		{
			$('.accordin h3:first').addClass('active-header').next('div').addClass('active').css({'display':'block'});
		}
		if(settings.arrow)
		{
			$('.accordin h3').append('<span class="icon"></span>');
		}
	});

		
    };





 
