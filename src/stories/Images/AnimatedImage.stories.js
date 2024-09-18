export default {
  title: 'Images/Animated Image',
  component: 'surf-animated-image',
  render() { 
    return `
      <surf-animated-image
        src="https://shoelace.style/assets/images/walk.gif"
        alt="Animation of untied shoes walking on pavement"
      ></surf-animated-image>

    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};