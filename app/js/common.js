(function () {
    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.mobile-mnu').toggleClass('active');
        $('.logo').toggleClass('hide');
        $('.video-bg_layer').toggleClass('hide');
        $('.home-layer-info').toggleClass('hide');
    });

    $('.header-video').vide({
        mp4: 'video/1.mp4',
    });

    // Video Popup
    $(".js-modal-video").modalVideo({
        channel:'youtube',
        autoplay: 1
    });

    if ($('.content').is('.scroll')) {
        $('body').css('overflow', 'scroll');
    }

    $.jInvertScroll(['.scroll'], {
        width: 'auto',	// Page width (auto or int value)
        height: 3000,	// Page height (the shorter, the faster the scroll)
        onScroll: function(percent) {
            // Callback function that will be called each time the user
            // scrolls up or down, useful for animating other parts
            // on the page depending on how far the user has scrolled down
            // values go from 0.0 to 1.0 (with 4 decimals precision)
        }
    });
})();
