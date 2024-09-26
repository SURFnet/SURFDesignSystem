import SlCarousel from '@shoelace-style/shoelace/dist/components/carousel/carousel.component.js';

class SurfCarousel extends SlCarousel {
  constructor() {
    super();
  }
}

customElements.define("sl-carousel", SurfCarousel);