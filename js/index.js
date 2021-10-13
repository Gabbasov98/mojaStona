function offertaSlider() {
    var swiper = new Swiper(".offerta .swiper-container", {
        spaceBetween: 30,
        speed: 2000,
        effect: "fade",
        navigation: {
            nextEl: ".offerta .swiper-button-next",
            prevEl: ".offerta .swiper-button-prev",
        },
        pagination: {
            el: ".offerta .swiper-pagination",
            clickable: true,
        },
    });
}
$(document).ready(function() {
    offertaSlider()
    $('.wrapper').pagepiling();
});