// Main
$(document).ready(function() {
    // Phần Slider
    $('.home_banner1 .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    // Phần Clients
    $('.comment .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });
});