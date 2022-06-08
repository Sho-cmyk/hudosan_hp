class BackgroundAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelectorAll(el);
    }
    animate() {
        this.DOM.el.classList.add('inview');
    }
};