$( document ).ready(function() {
    $(".loader_inner").delay(100).fadeOut("slow");
    $(".loader").delay(400).fadeOut("slow");
});

(function () {

    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.mobile-mnu').toggleClass('active');
        $('.copyright').toggleClass('active');
        $('.logo').toggleClass('hide');
        $('.no-hide').toggleClass('hide');
        $('body').toggleClass('overflow');
    });

    // Video Popup
    $(".js-modal-video").modalVideo({
        channel:'youtube',
        autoplay: 1
    });

    $(function() {
        var width = $(window).width();
        var height = $(window).height();
        if (width >= 768 & height >= 636){
            $('.owl-carousel').owlCarousel({
                loop:false,
                margin:20,
                nav: true,
                dots: false,
                navText: ["",""],
                responsive : {
                    0 : {
                        items:2
                    },
                    569 : {
                        items: 2
                    },
                    768 : {
                        items:2
                    },
                    1024 : {
                        items:2
                    },
                    1350 : {
                        items:3
                    },
                    1900 : {
                        items:3
                    }
                }
            });
            $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY<0) {
                    $('.owl-carousel').trigger('next.owl');
                } else {
                    $('.owl-carousel').trigger('prev.owl');
                }
                e.preventDefault();
            });
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



})();
