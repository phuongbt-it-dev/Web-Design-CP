// Main
$(document).ready(function() {
    // Phần Comment
    $('.comment .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
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

AOS.init();
