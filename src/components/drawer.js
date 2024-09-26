import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.component.js';

class SurfDrawer extends SlDrawer {
  constructor() {
    super();
  }
}

customElements.define("sl-drawer", SurfDrawer);