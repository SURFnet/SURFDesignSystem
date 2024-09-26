import SlFormatDate from '@shoelace-style/shoelace/dist/components/format-date/format-date.component.js';

class SurfFormatDate extends SlFormatDate {
  constructor() {
    super();
  }
}

customElements.define("sl-format-date", SurfFormatDate);