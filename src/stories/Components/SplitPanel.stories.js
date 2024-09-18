export default {
  title: 'Components/Split Panel',
  component: 'surf-split-panel',
  render() {
    return `
      <surf-split-panel>
        <div
          slot="start"
          style="height: 200px; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
        >
          Start
        </div>
        <div
          slot="end"
          style="height: 200px; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
        >
          End
        </div>
      </surf-split-panel>
`
  },
  argTypes: {},
};

export const Main = {
  args: {}
};