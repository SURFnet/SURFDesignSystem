import SlAnimation from '@shoelace-style/shoelace/dist/components/animation/animation.component.js';

class SurfAnimation extends SlAnimation {
  constructor() {
    super();
  }
}

customElements.define("sl-animation", SurfAnimation);