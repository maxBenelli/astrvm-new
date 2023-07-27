$(document).ready(function () {
    new WOW({ mobile: false, }).init();

    setTimeout(() => {
        $('.popup-overlay').fadeIn();
        $('html').css('overflow', 'hidden');
    }, 3000);

    $('.popup-block__close').on('click', function(e) {
        e.preventDefault();
        $('.popup-overlay').fadeOut();
        $('html').css('overflow', 'unset');
    });

    $(window).scrollTop(0);
    setTimeout(function () {
        $('.main__title-wrap').addClass('animate');
        $('.main__nums').addClass('animate');
        $('.header2').addClass('normal');
        setTimeout(function () {
            $('body').removeClass('overflow');
        }, 2050)
    }, 1500);
});

var swiper = new Swiper(".places:not(.house-layout-block) .swiper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 124,
    centeredSlides: true,
    speed: 1400,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.places .places__next',
        prevEl: '.places .places__prev',
    },
    pagination: {
        el: ".places .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        992: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 24
        },
        1200: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 124
        }
    }
});

var swiper = new Swiper(".house-layout-block .swiper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1400,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.places .places__next',
        prevEl: '.places .places__prev',
    },
    pagination: {
        el: ".places .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        992: {
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 0
        },
        1200: {
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 0
        }
    }
});

var swiper2 = new Swiper(".pent .swiper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 124,
    centeredSlides: true,
    navigation: {
        nextEl: '.pent__next',
        prevEl: '.pent__prev',
    },
    pagination: {
        el: ".pent .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        576: {
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 124
        }
    }
});

var swiper233 = new Swiper(".team .swiper", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
        nextEl: '.team__slider .places__next',
        prevEl: '.team__slider .places__prev',
    },
    pagination: {
        el: ".team .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
            loop: true,
        }
    }
});
var swiper3 = new Swiper(".serv__all", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.serv__next',
        prevEl: '.serv__prev',
    },
    pagination: {
        el: ".serv__nav .swiper-pagination",
        clickable: true,
    },
});
var swiper4 = new Swiper(".inzh .swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.inzh__next',
        prevEl: '.inzh__prev',
    }
});
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 132;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
$('.menu a').on('click', function () {
    $('.menu').removeClass('active');
    $('.menu-close').removeClass('active');
});
$('.header__burg').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
    $('.menu-close').toggleClass('active');
});
$('.menu-close').on('click', function (e) {
    e.preventDefault();
    $('.menu').removeClass('active');
    $('.menu-close').removeClass('active');
});
$(document).ready(function () {
    $.getScript('js/hammer.min.js').done(function () {
        setSwipe();
    });
    var windowW = $(window).width();
    var windowH = $(window).height();
    var windowScroll = $(window).scrollTop();
    var startScrollBack = 0;

    $('.gallery').each(function () {
        var element = $(this), num = element.find('.gallery__slide').length, str = '';
        element.find('.gallery__currentnum').html('01');
        element.find('.gallery__totaltnum').html((num > 9 ? num : '0' + num));
        str = '<span class="active"></span>';
        for (var i = 1; i < num; i++) {
            str += '<span></span>';
        }
        element.find('.gallery__navlines').html(str);
        element.find('.gallery__row').css('width', num * 100 + 'vw');
        element.find('.gallery__slide:first').addClass('active');
    });

    $('.gallery__arrow').on('click', function () {
        var gallery = $(this).parents('.gallery');
        if (gallery.hasClass('sliding')) return;
        gallery.addClass('sliding');
        setTimeout(function () {
            gallery.removeClass('sliding');
        }, ($(window).width() < 768 ? 600 : 1500));
        gallery.find('.appearanim').removeClass('appearanim animate');
        var slides = gallery.find('.gallery__navlines span').length;
        var activeSlide = gallery.find('.gallery__navlines span.active').index();
        if ($(this).hasClass('gallery__arrow_left')) {
            gallery.find('.gallery__slide.active').removeClass('active');
            var prevsliding = gallery.find('.gallery__slide.sliding').index() - 1;
            if (prevsliding < 0) prevsliding = gallery.find('.gallery__slide').length - 1;
            gallery.find('.gallery__slide.sliding').addClass('active').removeClass('sliding');
            gallery.find('.gallery__slide:eq(' + prevsliding + ')').addClass('sliding');
            activeSlide--;
            if (activeSlide < 0) activeSlide = slides - 1;
            gallery.find('.gallery__row').css({
                '-webkit-transform': 'translateX(' + '-' + (activeSlide * 100) + 'vw' + ')',
                'transform': 'translateX(' + '-' + (activeSlide * 100) + 'vw' + ')'
            });
            gallery.find('.gallery__slide:eq(' + activeSlide + ')').addClass('active');
        }
        else {
            gallery.find('.gallery__slide.active').addClass('sliding').siblings().removeClass('sliding');
            activeSlide++;
            if (activeSlide == slides) activeSlide = 0;
            gallery.find('.gallery__slide:eq(' + activeSlide + ')').addClass('active').siblings().removeClass('active');
            gallery.find('.gallery__row').css({
                '-webkit-transform': 'translateX(' + '-' + (activeSlide * 100) + 'vw' + ')',
                'transform': 'translateX(' + '-' + (activeSlide * 100) + 'vw' + ')'
            });
        }
        gallery.find('.gallery__navlines span:eq(' + activeSlide + ')').addClass('active').siblings().removeClass('active');
        gallery.find('.gallery__slide.active .gallery__imganim').removeClass('animate');

        if (gallery.find('.gallery__slide.active[data-nav="dark"]').length) {
            gallery.find('.gallery__nav').addClass('dark');
        }
        else {
            gallery.find('.gallery__nav').removeClass('dark');
        }
        if (gallery.find('.gallery__slide.active[data-num="dark"]').length) {
            gallery.find('.gallery__num').addClass('dark');
        }
        else {
            gallery.find('.gallery__num').removeClass('dark');
        }
        gallery.find('.gallery__slide.active .gallery__imganim').addClass('animate');

        var activeSlideNum = activeSlide + 1;
        gallery.find('.gallery__currentnum').html((activeSlideNum > 9 ? activeSlideNum : '0' + activeSlideNum));
    });

    $('.top__menu').on('click', function () {
        var parent_top = $(this).parents('.top')
        $(this).toggleClass('open');
        parent_top.find('.menu__left,.menu__right').toggleClass('open');
        parent_top.find('.top__num').toggleClass('hide');
        parent_top.toggleClass('menuopen');
    });
    $('.menu__nav a.scrollTo,.menu__links a.scrollTo').on('click', function (e) {
        e.preventDefault();
        scrollToElement($(this).attr('href'));
        $('.top__menu').removeClass('open');
        $('.menu__left,.menu__right').removeClass('open');
        $('.top__num').removeClass('hide');
        $('.top').removeClass('menuopen');
    });
    $('.top__logo').on('click', function (e) {
        scrollToElement('.wrap');
    });
    $('.menu__nav a').on('mouseenter', function () {
        $(this).siblings().addClass('notactive');
        $('.menu__bg[data-link="' + $(this).data('link') + '"]').addClass('active');
    });
    $('.menu__nav a').on('mouseleave', function () {
        $(this).siblings().removeClass('notactive');
        $('.menu__bg[data-link="' + $(this).data('link') + '"]').removeClass('active');
        if (!$('.menu__bg.active').length) {
            $('.menu__bg:first').addClass('active');
        }
    });

    $(window).on('resize', function () {
        windowW = $(window).width();
        windowH = $(window).height();
        setViewHeight();
    });
    var viewScroll = 0;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 300) {
            $('.top_menu').removeClass('show menuopen');
            $('.top_menu .menu__left,.top_menu .menu__right,.top_menu .top__menu').removeClass('open');
        }
        else {
            if (windowScroll > $(window).scrollTop()) {
                startScrollBack += windowScroll - $(window).scrollTop();
                if (startScrollBack > 500) {
                    $('.top_menu').addClass('show');
                }
            }
            else {
                startScrollBack = 0;
                if (!$('.top_menu').hasClass('menuopen')) {
                    $('.top_menu').removeClass('show');
                    $('.top_menu .menu__left,.top_menu .menu__right,.top_menu .top__menu').removeClass('open');
                }
            }
        }

        windowScroll = $(window).scrollTop();


        $('.appearanim').each(function () {
            var block = $(this);
            var ablock = block.find('.animatedblock');
            var scrollLine = windowScroll + windowH * 0.8 - block.offset().top;

            if (scrollLine > 0) {
                block.addClass('animate');
            }
            else {
                block.removeClass('animate');
            }
        });
        $('.appearanim2').each(function () {
            var block = $(this);
            var scrollLine = windowScroll + windowH * 0.5 - block.offset().top;
            if (scrollLine < 0) {
                block.addClass('appearanim');
            }
        });
        $('.gallery').each(function () {
            var block = $(this);
            var scrollLine = windowScroll + windowH - block.offset().top;
            if (scrollLine < 0) {
                block.find('.gallery__slide.active .gallery__imganim').addClass('animate');
            }
            else {
                block.find('.gallery__slide.active .gallery__imganim').removeClass('animate');
            }
        });
    });
    function scrollToElement(selector) {
        var top = $(selector).offset().top;
        if (windowW >= 768) {
            var viewTop = $('.view').offset().top;
            if (windowScroll < viewTop && top > viewTop) top += $('.view img').width() - $(window).width();
            else if (windowScroll > viewTop && top < viewTop) top -= $('.view img').width() - $(window).width();
        }
        $('html,body').stop().animate({
            scrollTop: top + 'px'
        }, 500, "linear");
    }
    function setViewHeight() {
        $('.view').height(windowH + ($('.view__img img').width() - windowW) * 2);
    }
    function speedCount(t) {
        var sqt = t * t;
        return sqt / (2 * (sqt - t) + 1);
    }
    function setSwipe() {
        if ($('#fashionhouse').length) {
            Hammer($('#fashionhouse')[0]).on("swipeleft", function () {
                $('#fashionhouse').find('.gallery__arrow_right').click();
            });
            Hammer($('#fashionhouse')[0]).on("swiperight", function () {
                $('#fashionhouse').find('.gallery__arrow_left').click();
            });
        }
        if ($('#fashionhouse2').length) {
            Hammer($('#fashionhouse2')[0]).on("swipeleft", function () {
                $('#fashionhouse2').find('.gallery__arrow_right').click();
            });
            Hammer($('#fashionhouse2')[0]).on("swiperight", function () {
                $('#fashionhouse2').find('.gallery__arrow_left').click();
            });
        }
    }
});