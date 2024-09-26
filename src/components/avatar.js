import SlAvatar from '@shoelace-style/shoelace/dist/components/avatar/avatar.component.js';

class SurfAvatar extends SlAvatar {
  constructor() {
    super();
  }
}

customElements.define("sl-avatar", SurfAvatar);