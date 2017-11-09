$.scrollTo(0);

$('#link1').click(function(){
   $.scrollTo($('#my-projects'), 500);
});

$('.button-down').click(function(){
   $.scrollTo($('#pasek'), 800);
});

$('#link2').click(function(){
   $.scrollTo($('#skills'), 900); 
});

$('#link3').click(function(){
   $.scrollTo($('#about'), 1000); 
});

$('#link4').click(function(){
   $.scrollTo($('#contact'), 1100); 
});

$(document).ready(function(){
    var navY = $('#pasek').offset().top;
    var stickyNav = function(){
        var scrollY = $(window).scrollTop();
        
        if (scrollY > navY){
            $('#pasek').addClass('sticky-nav');   
        }else{
            $('#pasek').removeClass('sticky-nav');
        }
    };
    
    stickyNav();
    
    $(window).scroll(function(){
        stickyNav(); 
    });
});