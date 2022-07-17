window.onload = function () {
    new Swiper('.sw-visual', {
        effect : 'fade',
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-visual-pg',
            type: 'fraction',
            clickable: true,
        },
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },
    });
}