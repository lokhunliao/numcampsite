$(function(){
    $('.fa-bars').click(function(){
        $('.fa-bars').toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
    
    $('nav ul li a').click(function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });
}); 

