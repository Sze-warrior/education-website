$(document).ready(function(){       

	//variables
    var scroll_pos = 0;
    var header = $('.header-container');
    var headerLogo = $('.header-logo');
    var homeIntro = $('.intro');

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        
        if(scroll_pos > 300) {
        	$(homeIntro).addClass('show');
        	$(headerLogo).addClass('black');
        	$(header).addClass('white');
    	}else{
        	$(headerLogo).removeClass('black');
        	$(header).removeClass('white');    		
    	}
	});
});