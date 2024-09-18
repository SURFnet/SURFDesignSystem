export default {
  component: 'surf-drawer',
  render() {
    return `
      <surf-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <surf-button slot="footer" variant="primary">Close</surf-button>
      </surf-drawer>

      <surf-button>Open Drawer</surf-button>

      <script>
        const drawer = document.querySelector('.drawer-overview');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector('surf-button[variant="primary"]');

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