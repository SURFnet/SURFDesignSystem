export default {
  component: 'sl-popup',
  render() {
    return `
      <div class="popup-overview">
        <sl-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </sl-popup>

        <div class="popup-overview-options">
          <sl-select label="Placement" name="placement" value="top" class="popup-overview-select">
            <sl-option value="top">top</sl-option>
            <sl-option value="top-start">top-start</sl-option>
            <sl-option value="top-end">top-end</sl-option>
            <sl-option value="bottom">bottom</sl-option>
            <sl-option value="bottom-start">bottom-start</sl-option>
            <sl-option value="bottom-end">bottom-end</sl-option>
            <sl-option value="right">right</sl-option>
            <sl-option value="right-start">right-start</sl-option>
            <sl-option value="right-end">right-end</sl-option>
            <sl-option value="left">left</sl-option>
            <sl-option value="left-start">left-start</sl-option>
            <sl-option value="left-end">left-end</sl-option>
          </sl-select>
          <sl-input type="number" name="distance" label="distance" value="0"></sl-input>
          <sl-input type="number" name="skidding" label="Skidding" value="0"></sl-input>
        </div>

        <div class="popup-overview-options">
          <sl-switch name="active" checked>Active</sl-switch>
          <sl-switch name="arrow">Arrow</sl-switch>
        </div>
      </div>

      <script>
        const container = document.querySelector('.popup-overview');
        const popup = container.querySelector('sl-popup');
        const select = container.querySelector('sl-select[name="placement"]');
        const distance = container.querySelector('sl-input[name="distance"]');
        const skidding = container.querySelector('sl-input[name="skidding"]');
        const active = container.querySelector('sl-switch[name="active"]');
        const arrow = container.querySelector('sl-switch[name="arrow"]');

        select.addEventListener('sl-change', () => (popup.placement = select.value));
        distance.addEventListener('sl-input', () => (popup.distance = distance.value));
        skidding.addEventListener('sl-input', () => (popup.skidding = skidding.value));
        active.addEventListener('sl-change', () => (popup.active = active.checked));
        arrow.addEventListener('sl-change', () => (popup.arrow = arrow.checked));
      </script>

      <style>
        .popup-overview sl-popup {
          --arrow-color: var(--sl-color-primary-600);
        }

        .popup-overview span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--sl-color-neutral-600);
          margin: 50px;
        }

        .popup-overview .box {
          width: 100px;
          height: 50px;
          background: var(--sl-color-primary-600);
          border-radius: var(--sl-border-radius-medium);
        }

        .popup-overview-options {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 1rem;
        }

        .popup-overview-options sl-select {
          width: 160px;
        }

        .popup-overview-options sl-input {
          width: 100px;
        }

        .popup-overview-options + .popup-overview-options {
          margin-top: 1rem;
        }
      </style>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};