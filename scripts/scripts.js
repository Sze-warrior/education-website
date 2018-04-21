$(document).ready(function(){       

	//variables
    var scroll_pos = 0;
    var header = $('.header-container');
    var headerLogo = $('.header-logo');
    var intro = $('.intro');

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        
        if(scroll_pos > 300) {
        	$(intro).addClass('show');
        	$(headerLogo).addClass('black');
        	$(header).addClass('white');
    	}else{
        	$(headerLogo).removeClass('black');
        	$(header).removeClass('white');    		
    	}
	});
});