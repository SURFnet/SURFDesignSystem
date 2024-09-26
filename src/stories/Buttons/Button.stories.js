import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  component: 'surf-button',
  render(args) {
    return html`
<surf-button
  ?loading=${args.loading}
  ?disabled=${args.disabled}

  variant=${ifDefined(args.variant)}
  size=${ifDefined(args.size)}
  style="width: ${ifDefined(args.width)};"

  href=${ifDefined(args.href)}
  ?download=${args.download}
  target=${ifDefined(args.target)}
>
  ${ args.default }
</surf-button>
  `},
    argTypes: {
      // Slots
      default: {
        control: 'text',
        description: 'Any text or html elements to be displayed inside the button.',
        table: {
          category: "Slots",
        },
      },
      // Style
      variant: {
        control: 'radio',
        options: ['primary', 'outline', 'text'],
        table: {
          defaultValue: { summary: 'primary' },
          category: "Style",
        }
      },
      size: {
        control: 'radio',
        options: ['small', 'medium', 'large'],
        table: {
          defaultValue: { summary: 'medium' },
          category: "Style",
        }
      },
      width: {
        name: 'custom width',
        control: 'radio',
        options: ['auto', 'full'],
        mapping: {
          auto: null,
          full: '100%'
        },
        description: 'A custom width can be applied to the button by passing a class or inline styles.',
        table: {
          category: "Style",
        }
      },
      // State
      loading: {
        control: 'boolean',
        table: {
          defaultValue: { summary: false },
          category: "State",
        }
      },
      disabled: {
        control: 'boolean',
        table: {
          defaultValue: { summary: false },
          category: "State",
        }
      },
      // Link
      href: {
        control: 'text',
        description: 'By setting this attribute, the component will render as an `\<a\>` element.',
        table: {
          category: "Link",
        },
      },
      download: {
        control: 'boolean',
        description: 'Tells the browser to download the linked file as this filename. Only used when `href` is present.',
        if: {
          arg: 'href',
          truthy: true
        },
        table: {
          category: "Link",
        },
      },
      target: {
        control: 'text',
        description: 'Tells the browser where to open the link. Only used when `href` is present.',
        if: {
          arg: 'href',
          truthy: true
        },
        table: {
          category: "Link",
        },
      },
    },
  };

  export const Main = {
    args: {
      // Slots
      default: 'Button',
      // Style
      variant: null,
      size: null,
      // State
      loading: false,
      disabled: false,
      // Link
      download: false,
    }
  };