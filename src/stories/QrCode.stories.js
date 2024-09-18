export default {
  component: 'surf-qr-code',
  render() {
    return `
      <surf-qr-code value="https://shoelace.style/" label="Scan this code to visit Shoelace on the web!"></surf-qr-code>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};