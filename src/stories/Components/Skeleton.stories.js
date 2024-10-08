export default {
  component: 'sl-skeleton',
  render() {
    return `
      <div class="skeleton-overview">
        <header>
          <sl-skeleton></sl-skeleton>
          <sl-skeleton></sl-skeleton>
        </header>

        <sl-skeleton></sl-skeleton>
        <sl-skeleton></sl-skeleton>
        <sl-skeleton></sl-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header sl-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview sl-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview sl-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview sl-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview sl-skeleton:nth-child(4) {
          width: 80%;
        }
      </style>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};