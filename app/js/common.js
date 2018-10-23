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
})();
