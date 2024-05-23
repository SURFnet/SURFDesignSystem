import { Preview } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/themes/light.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
