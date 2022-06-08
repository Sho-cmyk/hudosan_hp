document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
      this.header = document.querySelector('.header');
      // this.sides = document.querySelectorAll('.side');
      this._observers = [];
      this._init();
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider('.swiper-container');
    this.swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    this.swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      effect: 'flip',
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: this.swiper,
      },
      autoplay: {
          delay: 6000,
      }
    });
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone() {
    this._scrollInit();
  }

  _cb(el,inview) {
    if(inview) {
      const ta = new MainTitleTextAnimation(el);
      ta.animate()
    }
  }

  _sub_cb(el, inview) {
    if(inview) {
      const sub_ta = new SubTitleTextAnimation(el);
      sub_ta.animate()
    }
  }

  _inviewAnimation(el, inview) {
    if(inview) {
      el.classList.add('inview');
    }else {
      el.classList.remove('inview');
    }
  }

  _navAnimation(el, inview) {
    if(inview) {
      this.header.classList.remove('triggered');
    }else {
      this.header.classList.add('triggered');
    }
  }

  _bg_cb(el, inview) {
    if(inview) {
      const ba = new BackgroundAnimation(el);
      ba.animate()
    } 
  }

  _scrollInit() {
    this.observers = new ScrollObserver('.tween-animate-title', this._cb);
    this.observers = new ScrollObserver('.tween-animate-subtitle', this._sub_cb);
    this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
    this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
    this.observers = new ScrollObserver('.main-title-part-odd', this._bg_cb);
    this.observers = new ScrollObserver('.main-title-part-even', this._bg_cb);
    this.observers = new ScrollObserver('.hudosan__el', this._bg_cb);
  }

};
