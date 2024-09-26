export default {
  title: 'Images/Carousel Item',
  component: 'sl-carousel-item',
  render() {
    return `
      <sl-carousel-item>
        <img
          alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </sl-carousel-item>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};