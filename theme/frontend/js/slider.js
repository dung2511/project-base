var SLIDER = (function () {
    var slideBannerHome = function () {
        var slideBanner = document.querySelector('.slide-banner');
        if (slideBanner) {
            var banner = new Swiper('.slide-banner', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            })
        }
    }
    return {
        _: function () {
            slideBannerHome();
        }
    }
})();

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        SLIDER._();
    }, 100);
})