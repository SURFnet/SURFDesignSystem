export default {
  title: 'Images/Carousel Item',
  component: 'surf-carousel-item',
  render() {
    return `
      <surf-carousel-item>
        <img
          alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </surf-carousel-item>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};