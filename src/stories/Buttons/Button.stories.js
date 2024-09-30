import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export default {
  component: 'sl-button',
  render(args) {
    return html`
<sl-button
  ?loading=${args.loading}
  ?disabled=${args.disabled}

  variant=${ifDefined(args.variant)}
  size=${ifDefined(args.size)}
  ?circle=${args.circle}
  style="width: ${ifDefined(args.width)};"

  href=${ifDefined(args.href)}
  ?download=${args.download}
  target=${ifDefined(args.target)}
>
  ${ args.default }${ unsafeHTML(args.icon) }
</sl-button>
  `},
    argTypes: {
      // Slots
      default: {
        control: 'text',
        description: 'Any text or html elements to be displayed inside the button.',
        if: {
          arg: 'circle',
          truthy: false
        },
        table: {
          category: "Slots",
        },
      },
      icon: {
        name: 'default',
        control: 'radio',
        description: 'An `sl-icon` to be displayed inside the cicle button.',
        if: {
          arg: 'circle',
          truthy: true
        },
        table: {
          category: "Slots",
        },
        options: ['gear', 'like', 'heart'],
        mapping: {
          gear: '<sl-icon name="gear"></sl-icon>',
          like: '<sl-icon name="hand-thumbs-up"></sl-icon>',
          heart: '<sl-icon name="heart"></sl-icon>',
        }
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
      circle: {
        control: 'boolean',
        description: 'When this attribute is set, the button expects a single `<sl-icon>` in the default slot.',
        table: {
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
      icon: 'gear',
      // Style
      variant: null,
      size: null,
      circle: false,
      // State
      loading: false,
      disabled: false,
      // Link
      href: null,
      target: null,
      download: false,
    }
  };