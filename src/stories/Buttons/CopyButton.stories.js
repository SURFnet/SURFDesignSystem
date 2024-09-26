import { html } from 'lit';

export default {
  title: 'Buttons/Copy Button',
  render(args) {
    return html`
<sl-copy-button
  value="${ args.value }"
  copy-label="${ args['copy-label'] }"
  success-label="${ args['success-label'] }"
  error-label="${ args['error-label'] }"
></sl-copy-button>`
  },
  argTypes: {
    'copy-label': {
      control: 'text',
      defaultValue: { summary: 'Copy' }
    },
    'success-label': {
      control: 'text',
      defaultValue: { summary: 'Copied' }
    },
    'error-label': {
      control: 'text',
      defaultValue: { summary: 'Failed' }
    },
  },
};

export const Main = {
  args: {
    value: 'This text will be copied to the clipboard',
  }
};

// TODO: add icons and examples copying from other elements