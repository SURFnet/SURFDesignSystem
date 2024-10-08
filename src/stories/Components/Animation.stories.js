export default {
  component: 'sl-animation',
  render() {
    return `
      <div class="animation-overview">
        <sl-animation name="bounce" duration="2000" play><div class="box"></div></sl-animation>
        <sl-animation name="jello" duration="2000" play><div class="box"></div></sl-animation>
        <sl-animation name="heartBeat" duration="2000" play><div class="box"></div></sl-animation>
        <sl-animation name="flip" duration="2000" play><div class="box"></div></sl-animation>
      </div>

      <style>
        .animation-overview .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--sl-color-primary-600);
          margin: 1.5rem;
        }
      </style>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};