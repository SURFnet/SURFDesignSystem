export default {
  component: 'surf-popup',
  render() {
    return `
      <div class="popup-overview">
        <surf-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </surf-popup>

        <div class="popup-overview-options">
          <surf-select label="Placement" name="placement" value="top" class="popup-overview-select">
            <surf-option value="top">top</surf-option>
            <surf-option value="top-start">top-start</surf-option>
            <surf-option value="top-end">top-end</surf-option>
            <surf-option value="bottom">bottom</surf-option>
            <surf-option value="bottom-start">bottom-start</surf-option>
            <surf-option value="bottom-end">bottom-end</surf-option>
            <surf-option value="right">right</surf-option>
            <surf-option value="right-start">right-start</surf-option>
            <surf-option value="right-end">right-end</surf-option>
            <surf-option value="left">left</surf-option>
            <surf-option value="left-start">left-start</surf-option>
            <surf-option value="left-end">left-end</surf-option>
          </surf-select>
          <surf-input type="number" name="distance" label="distance" value="0"></surf-input>
          <surf-input type="number" name="skidding" label="Skidding" value="0"></surf-input>
        </div>

        <div class="popup-overview-options">
          <surf-switch name="active" checked>Active</surf-switch>
          <surf-switch name="arrow">Arrow</surf-switch>
        </div>
      </div>

      <script>
        const container = document.querySelector('.popup-overview');
        const popup = container.querySelector('surf-popup');
        const select = container.querySelector('surf-select[name="placement"]');
        const distance = container.querySelector('surf-input[name="distance"]');
        const skidding = container.querySelector('surf-input[name="skidding"]');
        const active = container.querySelector('surf-switch[name="active"]');
        const arrow = container.querySelector('surf-switch[name="arrow"]');

        select.addEventListener('sl-change', () => (popup.placement = select.value));
        distance.addEventListener('sl-input', () => (popup.distance = distance.value));
        skidding.addEventListener('sl-input', () => (popup.skidding = skidding.value));
        active.addEventListener('sl-change', () => (popup.active = active.checked));
        arrow.addEventListener('sl-change', () => (popup.arrow = arrow.checked));
      </script>

      <style>
        .popup-overview surf-popup {
          --arrow-color: var(--surf-color-primary-600);
        }

        .popup-overview span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--surf-color-neutral-600);
          margin: 50px;
        }

        .popup-overview .box {
          width: 100px;
          height: 50px;
          background: var(--surf-color-primary-600);
          border-radius: var(--surf-border-radius-medium);
        }

        .popup-overview-options {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 1rem;
        }

        .popup-overview-options surf-select {
          width: 160px;
        }

        .popup-overview-options surf-input {
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