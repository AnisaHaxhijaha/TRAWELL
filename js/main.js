document.addEventListener("DOMContentLoaded", function() {

    // Content Animation

    const content = document.querySelector('.content');

   content.classList.add('show');

});

document.getElementById('explore-btn').addEventListener('click', function() {

    document.getElementById('cards-section').scrollIntoView({ behavior: 'smooth' });

});
var swiper = new Swiper(".review-slider" ,{
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    breakpoints:{
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
    },
});