export default {
  component: 'surf-dialog',
  render() {
    return `
      <surf-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <surf-button slot="footer" variant="primary">Close</surf-button>
      </surf-dialog>

      <surf-button>Open Dialog</surf-button>

      <script>
        const dialog = document.querySelector('.dialog-overview');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('surf-button[slot="footer"]');

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