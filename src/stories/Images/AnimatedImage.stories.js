export default {
  title: 'Images/Animated Image',
  component: 'sl-animated-image',
  render() { 
    return `
      <sl-animated-image
        src="https://shoelace.style/assets/images/walk.gif"
        alt="Animation of untied shoes walking on pavement"
      ></sl-animated-image>

    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};