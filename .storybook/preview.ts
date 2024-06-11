import { Preview } from '@storybook/web-components';

import '../build/index.js';
import '../build/bundle.css';

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

  tags: ["autodocs"]
};

export default preview;
