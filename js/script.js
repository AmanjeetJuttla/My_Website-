var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});


$(document).ready(function () {
    $('#side-bar').click(function(){
        $('.links').toggleClass('nav-toggle');
        console.log("enter");
    });

    $(window).scroll(function(){
        $('.links').removeClass('nav-toggle');
        console.log("scroll");
    });
});





