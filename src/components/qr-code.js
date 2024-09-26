import SlQrCode from '@shoelace-style/shoelace/dist/components/qr-code/qr-code.component.js';

class SurfQrCode extends SlQrCode {
  constructor() {
    super();
  }
}

customElements.define("sl-qr-code", SurfQrCode);