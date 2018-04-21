$(document).ready(function(){       
    var scroll_pos = 0;

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        
        if(scroll_pos > 430) {
        	$('.hide').addClass('show');
        	$('.header-logo').addClass('black');
        	$('.header-container').addClass('white');
    	}else{
        	$('.header-logo').removeClass('black');
        	$('.header-container').removeClass('white');    		
    	}
	});
});