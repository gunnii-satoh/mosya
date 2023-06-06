$(function () {
    $(".p-nav__menu").each(function () {
        var submenu = $(this).find("ul");
        var symbol = $(this).children(".c-drop");
        var allsubmenu = $(".p-nav__subMenu");
        var allbtn = $(".p-nav__menu");
        $(this).hover(function () {
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(submenu).hide().removeClass("is-active");
                $(symbol).removeClass("is-active");
            } else {
                $(allsubmenu).hide().removeClass("is-active");
                $(allbtn).removeClass("is-active");
                $(submenu).slideDown("fast").addClass("is-active");
                $(this).addClass("is-active");
                $(symbol).addClass("is-active");
            }
        });
    });
});


$(function () {
    $(".c-menu").click(function () {
        if ($(".p-hgMenu__list").css("display") == "none") {
            $(".p-hgMenu__list").slideDown("fast");
            $(this).addClass("is-active");
        } else {
            $(".p-hgMenu__list").slideUp("fast");
            $(".p-nav__menu").removeClass("is-active");
            $(".p-nav__subMenu").slideUp("fast").removeClass("is-active");
            $(this).removeClass("is-active");
        }
    });
});


$(window).resize(function () {
    var windowWidth = window.innerWidth;
    var point = 1200;
    var timer = false;
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        if (windowWidth <= point) {
            $(".c-menu").removeClass("is-active");
            $(".p-hgMenu__list").addClass("is-active");
            $(".p-nav__sudMenu").slideUp("fast").removeClass("is-active");
        } else {
            $(".c-menu").removeClass("is-active");
            $(".p-hgMenu__list").removeClass("is-active");
            $(".p-nav__subMenu").slideUp("fast").removeClass("is-active");
        }
    }, 50);
});

// $(window).on('load', function () {
//     var w = window.innerWidth;
//     var point = 1200;
//     if (w <= point) {
//         //画面サイズが1200px以下のときの処理
//         $(".c-menu").removeClass("is-active");
//     } else {
//         //それ以外のときの処理
//         $(".c-menu").removeClass("is-active");
//     }
// });
