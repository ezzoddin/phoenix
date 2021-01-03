const nextIcon = '<img src = "image/prev.png" alt:"right">';
const prevIcon = '<img src = "image/next.png" alt:"left">';


$(".product-category").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    nav: false,
    navText: [
        nextIcon,
        prevIcon],
    responsive: {
        0: {
            items: 3,
            nav: false
        },
        768: {
            items: 4,
            nav: false
        },
        1199: {
            items: 7,
            nav: false
        }
    }
});



