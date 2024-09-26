import SlBreadcrumb from '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.component.js';

class SurfBreadcrumb extends SlBreadcrumb {
  constructor() {
    super();
  }
}

customElements.define("sl-breadcrumb", SurfBreadcrumb);