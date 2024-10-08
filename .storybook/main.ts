import { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  staticDirs: [
    '../static'
  ],


  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        outline: false
      },
    },
    "@storybook/addon-links",
    "@chromatic-com/storybook",
  ],

  core: {
    builder: '@storybook/builder-vite',
  },

  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },

  docs: {}
};
export default config;
