export default {
  component: 'sl-dialog',
  render() {
    return `
      <sl-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-dialog>

      <sl-button>Open Dialog</sl-button>

      <script>
        const dialog = document.querySelector('.dialog-overview');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('sl-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};