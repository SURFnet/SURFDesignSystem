import { Preview } from '@storybook/web-components';
import '../src/index.js';

import '@shoelace-style/shoelace/dist/themes/light.css';
import './../assets/css/surf.css';
import './../assets/css/blue.css';
import './../assets/css/green.css';
import './../assets/css/neutral.css';
import './../assets/css/orange.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'neutral',
      toolbar: {
        icon: 'circlehollow',
        items: ['neutral', 'blue', 'orange', 'green'],
      },
    },
  },

  decorators: [
    (story, context) => {
      const theme = context.globals.theme;
      document.body.setAttribute('data-theme', theme);
      return story();
    }
  ],
};

export default preview;
