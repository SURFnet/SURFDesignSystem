import SlBreadcrumbItem from '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.component.js';

class SurfBreadcrumbItem extends SlBreadcrumbItem {
  constructor() {
    super();
  }
}

customElements.define("sl-breadcrumb-item", SurfBreadcrumbItem);