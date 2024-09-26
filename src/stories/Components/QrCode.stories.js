export default {
  title: 'Components/QR Code',
  component: 'sl-qr-code',
  render() {
    return `
      <sl-qr-code value="https://shoelace.style/" label="Scan this code to visit Shoelace on the web!"></sl-qr-code>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};