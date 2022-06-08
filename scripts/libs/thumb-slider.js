class ThumbSlider {
    constructor(el) {
        this.el = el;
        this.thumbs = this._initThumbSwiper();
    }

    _initThumbSwiper() {
        return new Swiper(this.el, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
          });
    }
}