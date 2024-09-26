import SlAnimatedImage from '@shoelace-style/shoelace/dist/components/animated-image/animated-image.component.js';

class SurfAnimatedImage extends SlAnimatedImage {
  constructor() {
    super();
  }
}

customElements.define("sl-animated-image", SurfAnimatedImage);