export default {
  component: 'surf-animation',
  render() {
    return `
      <div class="animation-overview">
        <surf-animation name="bounce" duration="2000" play><div class="box"></div></surf-animation>
        <surf-animation name="jello" duration="2000" play><div class="box"></div></surf-animation>
        <surf-animation name="heartBeat" duration="2000" play><div class="box"></div></surf-animation>
        <surf-animation name="flip" duration="2000" play><div class="box"></div></surf-animation>
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