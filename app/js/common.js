(function () {

    $(".loader_inner").delay(100).fadeOut("slow");
    $(".loader").delay(400).fadeOut("slow");

    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.mobile-mnu').toggleClass('active');
        $('.logo').toggleClass('hide');
        $('.video-bg_layer').toggleClass('hide');
        $('.home-layer-info').toggleClass('hide');
    });

    // Video Popup
    $(".js-modal-video").modalVideo({
        channel:'youtube',
        autoplay: 1
    });

    $(function() {
        var width = $(window).width();
        if (width > 768){
            if ($('.video-page').is('.scroll')) {
                $('body').css('overflow-y', 'scroll');
                $.jInvertScroll(['.scroll'], {
                    width: 'auto',	// Page width (auto or int value)
                    height: 3500,	// Page height (the shorter, the faster the scroll)
                    onScroll: function(percent) {
                        // Callback function that will be called each time the user
                        // scrolls up or down, useful for animating other parts
                        // on the page depending on how far the user has scrolled down
                        // values go from 0.0 to 1.0 (with 4 decimals precision)
                    }
                });
            }
        }
    });

    $('.photo-page').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return 'Валентин Куба';
            }
        },
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });

    $('audio').mediaelementplayer({
        // Do not forget to put a final slash (/)
        pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
        // this will allow the CDN to use Flash without restrictions
        // (by default, this is set as `sameDomain`)
        shimScriptAccess: 'always'
        // more configuration
    });

    $('.owl-carousel').owlCarousel({
        items:4,
        loop:false,
        margin:20,
        nav: true,
        dots: false,
        navText: ["",""],
        responsive : {
            0 : {
                items:2,
            },
            1350 : {
                items:3,
            },
            1900 : {
                items:4,
            }
        }
    });

})();
