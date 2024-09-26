export default {
  component: 'sl-tag',
  render() {
    return `
      <sl-tag variant="primary">Primary</sl-tag>
      <sl-tag variant="success">Success</sl-tag>
      <sl-tag variant="neutral">Neutral</sl-tag>
      <sl-tag variant="warning">Warning</sl-tag>
      <sl-tag variant="danger">Danger</sl-tag>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};