window.onload = function () {
    // 모달창
    let modalWrap = $('.modal-wrap');
    let modalClose = $('.modal-close');
    
  
    modalClose.click(function(){
      modalWrap.stop().fadeOut(500)
      // 추가기능 : 스크롤바 살리기
      // $('html').css('overflow', 'auto');
    });
    let modalMain = $('.modal-main')
    //내용 배경 클릭
    modalMain.click(function(event){
      // 클릭 정보 전달 막기
      event.stopPropagation();
    });
    //전체 배경 클릭
    modalWrap.click(function(){
      modalWrap.stop().fadeOut(500);
      // 추가기능 : 스크롤바 살리기
      // $('html').css('overflow', 'auto');
    });
    



    let go_top = $('.gotop')

    // scrollHandle 고 탑햇을떄
    function scrollHandler() {
        // top의 위치
        let top = $(this).scrollTop();
        console.log(top)
        if (top > 570) {
            go_top.addClass('gotop-show')
        } else {
            go_top.removeClass('gotop-show')
        }
    }
    scrollHandler()

    // gotop 눌렀을 때 최상단으로 가는거
    go_top.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });

    // let section = ['.visual' ,'.service', '.about', '.more', '.footer'];
    // let sectionSpeed = 500;
    // let sectionTotal = []
    // $.each(section, function(index, item){
    //     sectionTotal[index] = Math.ceil($(item).offset().top)
    // })
    // console.log(sectionTotal)



    let mobileBtn = $('.mobile-header-bt');
    let mbWrapOpen = $('.mb-wrap')
    let header = $('.header');
    let headerLogoFix = $('.header-logo > .logo')

    mobileBtn.click(function (event) {
        $(this).toggleClass('headeropen');
        mbWrapOpen.toggleClass('mb-wrap-open');
        header.toggleClass('mobile-header');
        headerLogoFix.toggleClass('mobile-logo');
    })

    $(window).resize(function () {
        let wW = $(window).width();
        if(wW > 1025){
            mobileBtn.removeClass('headeropen');
            mbWrapOpen.removeClass('mb-wrap-open');
            header.removeClass('mobile-header');
            headerLogoFix.removeClass('mobile-logo');
        }
    })


    // 스크롤 위치 이동시 
    $(window).scroll(function () {
        // more 슬라이드 쪽 1번쨰 슬라이드 안나오는거 해결하는코드
        let swWrap = $('.sw-wrap');

        let temp = $(window).scrollTop();
        let header = $('.header');
        let headerLogoFix = $('.header-logo > .logo')
        let mainMenu = $('.mainmenu')
        let headerBtn = $('.header-line')
        let go_top = $('.gotop')

        if (temp > 0) {
            header.addClass('header-open');
            headerLogoFix.addClass('logo-fix');
            mainMenu.addClass('mainmenu-fix');
            headerBtn.addClass('header-line-fix')
        } else {
            header.removeClass('header-open');
            headerLogoFix.removeClass('logo-fix');
            mainMenu.removeClass('mainmenu-fix');
            headerBtn.removeClass('header-line-fix')
        }

        if (temp > 570) {
            go_top.addClass('gotop-show')
        } else {
            go_top.removeClass('gotop-show')

        }
    })




    let visualArray = ["1", "2", "3", "4"];
    new Swiper('.sw-visual', {
        effect: 'fade',
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
                return '<span class="' + className + '">' + '<em>' + visualArray[index] + '</em>' + '<i></i>' + '<b></b>' + '</span>';
            },
        },
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },
    });

    new Swiper('.sw-more', {
        slidesPerView: 3,
        // speed: 400,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    $(".more-dim").on("click", function (event) {
        event.stopPropagation();
        $(this).hide();
    })
}