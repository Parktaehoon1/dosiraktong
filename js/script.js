window.onload = function () {


    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        console.log(temp)
        let header = $('.header');
        let headerLogoFix = $('.header-logo > .logo')


        if(temp > 0) {
            header.addClass('header-open');
            headerLogoFix.addClass('logo-fix');
        } else {
            header.removeClass('header-open');
            headerLogoFix.removeClass('logo-fix');

        }
    })



    let visualArray = ["1","2","3","4"];
    new Swiper('.sw-visual', {
        effect : 'fade',
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<em>'+ visualArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
              },
        },
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },
    });
}