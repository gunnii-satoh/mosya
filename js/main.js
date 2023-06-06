function mediaQueriesWin() {
    var width = $(window).width();
    if (width <= 1200) {
        $(".c-menu").click(function () {
            $(this).toggleClass("is-active");
            $(".l-hgMenu").toggleClass("is-active");
            $(".l-hgMenu__list").toggleClass("is-active");
        });
        $('.p-drop').click(function () {
            $(this).next('.p-nav__subMenu').slideToggle();
            $(this).toggleClass("is-active");
            $('.p-drop').not($(this)).next('.p-nav__subMenu').slideUp();
            $('.p-drop').not($(this)).removeClass("is-active");
        });
    } else {
        $('.p-drop').hover(function () {
            $(this).next('.p-nav__subMenu').slideToggle("fast");
            $('.p-drop').not($(this)).next('.p-nav__subMenu').slideUp("fast");
        });
    }
}

$(window).resize(function () {
    mediaQueriesWin();
});
$(window).on('load', function () {
    mediaQueriesWin();
});