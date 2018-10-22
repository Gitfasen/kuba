(function () {
    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.mobile-mnu').toggleClass('active');
        $('.logo').toggleClass('hide');
    })
    $('.header-video').vide({
        mp4: 'video/1.mp4',
    });
})();
