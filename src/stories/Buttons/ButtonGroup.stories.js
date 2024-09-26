import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import {repeat} from 'lit/directives/repeat.js';
import _ from 'lodash';

import { default as Button } from './Button.stories';

export default {
  title: 'Buttons/Button Group',
  component: 'sl-button-group',
  parameters: {
    docs: {
      description: {
        component: "Button groups can be used to group related buttons into sections. All button sizes are supported, but avoid mixing sizes within the same button group."
      }
    }
  },
  render(args) {
    return html`<sl-button-group label=${ ifDefined(args.label) }>
  ${ repeat(args.labels, l => Button.render({ default: l, variant: args.variant, size: args.size })) }
</sl-button-group>`},
  argTypes: {
    // Hidden
    labels: {
      table: {
        disable: true,
      },
    },
    // Slots
    slot: {
      name: 'default',
      control: false,
      description: 'One or more `<sl-button>` elements to display in the button group.',
      table: {
        category: "Slots",
      },
    },
    // Accessibility
    label: {
      control: 'text',
      description: 'This won’t be displayed on the screen, but it will be announced by assistive devices when interacting with the control and is strongly recommended.',
      table: {
        category: "Accessibility",
      },
    },
    // Button arguments
    variant: _.merge(Button.argTypes.variant, { table: { category: 'Button arguments' } },),
    size: _.merge(Button.argTypes.size, { table: { category: 'Button arguments' } },),
  },
};

export const TwoButtons = {
  name: '2 buttons',
  args: {
    labels: ['One', 'Two'],
  }
};

export const ThreeButtons = {
  name: '3 buttons',
  args: {
    labels: ['Left', 'Center', 'Right'],
    size: 'large'
  }
};

export const TenButtons = {
  name: '10 buttons',
  args: {
    labels: ['1','2','3','4','5','6','7','8','9','10'],
    variant: 'outline',
    size: 'small'
  }
}