export default {
  component: 'sl-carousel',
  render() {
    return `
      <sl-carousel pagination navigation mouse-dragging loop>
        <sl-carousel-item>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </sl-carousel-item>
        <sl-carousel-item>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </sl-carousel-item>
        <sl-carousel-item>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </sl-carousel-item>
        <sl-carousel-item>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </sl-carousel-item>
        <sl-carousel-item>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </sl-carousel-item>
      </sl-carousel>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};