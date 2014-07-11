// JavaScript Document
(function ( $ ) {
	$.fn.accordin = function(options) {
		var inpt = this;
		$(inpt).addClass('accordin');
		$(inpt).find('h3').addClass('accord-header');
		$(inpt).find('h3').next('div').addClass('accord-content');
		$(inpt).on( "click", "h3", function() {
			if ($(this).next('div').hasClass("active")==false) {
				 $('.accord-content').slideUp();										 
				 $( this ).next('div').slideDown();
				 $(inpt).find('h3').removeClass('active-header')
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
				$(inpt).find('h3:first').addClass('active-header').next('div').addClass('active').css({'display':'block'});
			}
			if(settings.arrow)
			{
				$(inpt).find('h3').append('<span class="icon"></span>');
			}
		});	
	};
}( jQuery ));





 
