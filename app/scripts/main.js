$(function(){
    $('#banner').owlCarousel({
        items:1,
        nav: false,
        dots:true
    });

    $('#menuHamburger').on('click', function(){

        $('.topbar__menu').toggleClass('open');


    })
});