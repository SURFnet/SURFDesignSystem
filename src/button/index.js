import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';
import './button.css';

class SurfButton extends SlButton {
  static properties = {
    // *** DISABLED ***
    pill: { state: true }, // not allowed
    caret: { state: true }, // not allowed
    outline: { state: true }, // replaced with type

    // *** TODO: MIN (?) ***
    // Circle button
    // Link button
  }

  constructor() {
    super();
    this.defaultVariant = 'primary';
    this._variant = this.defaultVariant;
  }

  get variant() {
    return this._variant;
  }

  set variant(value) {
    // only allow 'primary' and 'text'
    // extend with outline (outline property is disabled)

    const oldValue = this._variant;

    switch (value) {
      case 'text':
        this._variant = value;
        break;
      case 'outline':
        this._variant = this.defaultVariant;
        this.outline = true;
        break;
      default:
        this._variant = this.defaultVariant;
        this.outline = false;
        break;
    }
    
    this.requestUpdate('variant', oldValue);
  }
}

customElements.define("surf-button", SurfButton);