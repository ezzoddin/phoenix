const nextIcon = '<img src = "image/prev.png" alt:"right">';
const prevIcon = '<img src = "image/next.png" alt:"left">';


$(".product-category").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
        nextIcon,
        prevIcon],
    responsive: {
        0: {
            items: 3,
            nav: true
        },
        768: {
            items: 4,
            nav: true
        },
        1199: {
            items: 7,
            nav: true
        }
    }
});





$(".product").owlCarousel({
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
        },
        768: {
            items: 4,
        },
        1199: {
            items: 4,
        }
    }
});

