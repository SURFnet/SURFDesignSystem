export default {
  component: 'surf-mutation-observer',
  render() {
    return `
      <div class="mutation-overview">
        <surf-mutation-observer attr="variant">
          <surf-button variant="primary">Click to mutate</surf-button>
        </surf-mutation-observer>

        <br />
        👆 Click the button and watch the console

        <script>
          const container = document.querySelector('.mutation-overview');
          const mutationObserver = container.querySelector('surf-mutation-observer');
          const button = container.querySelector('surf-button');
          const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];
          let clicks = 0;

          // Change the button's variant attribute
          button.addEventListener('click', () => {
            clicks++;
            button.setAttribute('variant', variants[clicks % variants.length]);
          });

          // Log mutations
          mutationObserver.addEventListener('sl-mutation', event => {
            console.log(event.detail);
          });
        </script>
        </div>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};