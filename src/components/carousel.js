import SlCarousel from '@shoelace-style/shoelace/dist/components/carousel/carousel.js';

class SurfCarousel extends SlCarousel {
  constructor() {
    super();
  }
}

customElements.define("surf-carousel", SurfCarousel);