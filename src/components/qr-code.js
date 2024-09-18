import SlQrCode from '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';

class SurfQrCode extends SlQrCode {
  constructor() {
    super();
  }
}

customElements.define("surf-qr-code", SurfQrCode);