export default {
  component: 'sl-drawer',
  render() {
    return `
      <sl-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-drawer>

      <sl-button>Open Drawer</sl-button>

      <script>
        const drawer = document.querySelector('.drawer-overview');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector('sl-button[variant="primary"]');

        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      </script>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};