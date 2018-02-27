$(document).ready(function(){

	$('.videoWrapper__playIcon').click(function(){
		$('.videoWrapper_video').get(0).play();
		$('.videoWrapper__playIcon').hide();
		$('.videoWrapper__videoMask').hide();
  });

  $('.videoWrapper_video').click(function(){
		$('.videoWrapper_video').get(0).pause();
		$('.videoWrapper__playIcon').show();
		$('.videoWrapper__videoMask').show();
  });

  
  $('.videoWrapper_video').bind("ended", function() {
	  $('.videoWrapper__playIcon').show();
		$('.videoWrapper__videoMask').show();
	});


  $( ".mobileNavPic" ).click(function() {
		if ($('nav').css('display')=='none'){
			$('nav').show();
			$('nav').css({
				'background':'#f31e79',
				'width': '100%',
		    'position': 'absolute',
		    'margin-top': '9px',
		    'padding-bottom': '10px'
			});
		}
		else{
			$('nav').hide();	
		}
	});	

});

$(window).scroll(function(){

	if($(window).width()>767){
		if ( ($(this).scrollTop()) >= ($('header').height())) {
			$("nav").css({
				'position':'fixed',
				'width':'100%', 
				'top': '0', 
				'padding':'10px 0', 
				'background': '#fd712c', 
				'z-index': '500', 
				'box-shadow' : '0 4px 10px 1px rgba(0,0,0,0.15)'});
		} 
		else{
			$('nav').attr('style', '');
		}
	}

	if($(window).width()<=767){
		if ( ($(this).scrollTop()) > 30){
			$('header').css({
				'position':'fixed',
				'width':'100%', 
				'top': '0',
				'left':'0',
				'height':'60px',
				'padding' : '9px 15px',
				'background': '#fd712c', 
				'z-index': '500', 
				'box-shadow' : '0 4px 10px 1px rgba(0,0,0,0.15)'
			});
			$('nav').hide();
		}
		else {
			$('header').attr('style', '');
		}
		
	}
		
		
		

});
