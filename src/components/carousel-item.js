import SlCarouselItem from '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.component.js';

class SurfCarouselItem extends SlCarouselItem {
  constructor() {
    super();
  }
}

customElements.define("sl-carousel-item", SurfCarouselItem);