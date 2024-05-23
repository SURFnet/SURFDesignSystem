import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.component.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/dist/shoelace');

class SurfIcon extends SlIcon {}

customElements.define("surf-icon", SurfIcon);