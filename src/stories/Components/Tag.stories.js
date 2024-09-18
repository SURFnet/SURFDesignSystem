export default {
  component: 'surf-tag',
  render() {
    return `
      <surf-tag variant="primary">Primary</surf-tag>
      <surf-tag variant="success">Success</surf-tag>
      <surf-tag variant="neutral">Neutral</surf-tag>
      <surf-tag variant="warning">Warning</surf-tag>
      <surf-tag variant="danger">Danger</surf-tag>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};