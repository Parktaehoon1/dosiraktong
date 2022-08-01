window.onload = function () {
    let go_top = $('.gotop')

    // scrollHandle 고 탑햇을떄
    function scrollHandler(){
        // top의 위치
        let top = $(this).scrollTop();
        console.log(top)    
        if(top>570){
            go_top.addClass('gotop-show')
        } else {
            go_top.removeClass('gotop-show')
        }
    }
    scrollHandler()


    // gotop 눌렀을 때 최상단으로 가는거
    go_top.click(function(){
        $('html').animate({scrollTop:0
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

    mobileBtn.click(function () {
        $(this).toggleClass('headeropen');
        mbWrapOpen.toggleClass('mb-wrap-open');
        header.toggleClass('mobile-header');
        headerLogoFix.toggleClass('mobile-logo');
    })


    // 스크롤 위치 이동시 
    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        let header = $('.header');
        let headerLogoFix = $('.header-logo > .logo')
        let mainMenu = $('.mainmenu')
        let headerBtn = $('.header-line')

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
		slidesPerView:1,
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

	$(".more-dim").on("mouseup", function (){
		$(this).hide();
	})
}
