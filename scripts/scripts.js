$(document).ready(function(){       

	//variables
    var scroll_pos = 0;
    var header = $('.header-container');
    var headerLogo = $('.header-logo');
    var homeIntro = $('.intro-header');
    var EnglishMenue = $('.EnglishMenue');
    var Maorie = $('.Maorie');
    var hamburgerBar = $('.hamburger-bar');

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        
        if(scroll_pos > 70) {
        	$(homeIntro).addClass('show');
        	$(headerLogo).addClass('black');
        	$(header).addClass('white');
            $(EnglishMenue).addClass('nav-black');
            $(Maorie).addClass('nav-black');
            $(hamburgerBar).addClass('hamburger-bar-black');
    	}else{
        	$(headerLogo).removeClass('black');
        	$(header).removeClass('white'); 
            $(EnglishMenue).removeClass('nav-black');
            $(Maorie).removeClass('nav-black');  
            $(hamburgerBar).removeClass('hamburger-bar-black');
    	}
	});

    $('.menue2').click(function(e){
        $('.pollSlider').toggleClass('show');
        $(hamburgerBar).toggleClass('hamburger-bar-white');        
    })
});
