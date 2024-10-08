export default {
  title: 'JS Helpers/Resize Observer',
  component: 'sl-resize-observer',
  render() {
    return `
      <div class="resize-observer-overview">
        <sl-resize-observer>
          <div>Resize this box and watch the console 👉</div>
        </sl-resize-observer>
      </div>

      <script>
        const container = document.querySelector('.resize-observer-overview');
        const resizeObserver = container.querySelector('sl-resize-observer');

        resizeObserver.addEventListener('sl-resize', event => {
          console.log(event.detail);
        });
      </script>

      <style>
        .resize-observer-overview div {
          display: flex;
          border: solid 2px var(--sl-input-border-color);
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
      </style>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};