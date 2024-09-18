export default {
  title: 'Accessibility/Visually Hidden',
  component: 'surf-visually-hidden',
  render() {
    return `
      <div style="min-height: 1.875rem;">
        <surf-visually-hidden>
          <a href="#">Skip to main content</a>
        </surf-visually-hidden>
      </div>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};