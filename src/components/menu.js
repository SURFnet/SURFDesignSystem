import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.component.js';

class SurfMenu extends SlMenu {
  constructor() {
    super();
  }
}

customElements.define("sl-menu", SurfMenu);