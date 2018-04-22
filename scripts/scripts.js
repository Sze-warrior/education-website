$(document).ready(function(){       

	//variables
    var scroll_pos = 0;
    var header = $('.header-container');
    var headerLogo = $('.header-logo');
    var homeIntro = $('.intro-header');
    var EnglishMenue = $('.EnglishMenue');
    var Maorie = $('.Maorie');
    var hamburger = $('.navbar-item');

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        
        if(scroll_pos > 300) {
        	$(homeIntro).addClass('show');
        	$(headerLogo).addClass('black');
        	$(header).addClass('white');
            $(EnglishMenue).addClass('nav-black');
            $(Maorie).addClass('nav-black');
            $(hamburger).addClass('navbar-item-white')
    	}else{
        	$(headerLogo).removeClass('black');
        	$(header).removeClass('white'); 
            $(EnglishMenue).removeClass('nav-black');
            $(Maorie).removeClass('nav-black');  
            $(hamburger).removeClass('navbar-item-white')                         		
    	}
	});

    $('.menue2').click(function(e){
        $('.pollSlider').toggleClass('show');
    })
});