import { html } from 'lit';

export default {
  component: 'sl-visually-hidden',
  title: 'Accessibility/Visually Hidden',
  parameters: {
    docs: {
      description: {
        component: "Slot content will be accessible to screen readers but not visible on the page. Since visually hidden content can receive focus when tabbing, the element will become visible when something inside receives focus."
      }
    }
  },
  argTypes: {
    slot: {
      control: 'text',
      table: {
        category: "Slots",
      },
    },
  },
};

export const Main = {
  args: {
    slot: 'URL opens in a new window'
  },
  render: ({ slot }) => html`<a href="https://example.com/" target="_blank">
  Visit External Page
  <sl-icon name="box-arrow-up-right"></sl-icon>
  <sl-visually-hidden>${slot}</sl-visually-hidden>
</a>`
};

export const WithATabableElementInside = {
  args: {
    slot: 'back to top of page'
  },
  render: ({ slot }) => html`
<div style='background-color:var(--sl-color-primary-100);padding:20px;'>
  <p>
    Click on this text and press tab. The visually hidden item will appear, because it has an element inside that can receive focus.
    <br />
    <br />
    This behavior is intentional, as sighted keyboard user won’t be able to determine where the focus indicator is without it.
  </p>

  <sl-visually-hidden>
    <a href="#">
      ${slot}
    </a>
  </sl-visually-hidden>
</div>`
};