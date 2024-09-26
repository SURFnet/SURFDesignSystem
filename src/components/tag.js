import SlTag from '@shoelace-style/shoelace/dist/components/tag/tag.component.js';

class SurfTag extends SlTag {
  constructor() {
    super();
  }
}

customElements.define("sl-tag", SurfTag);