export default {
  component: 'surf-skeleton',
  render() {
    return `
      <div class="skeleton-overview">
        <header>
          <surf-skeleton></surf-skeleton>
          <surf-skeleton></surf-skeleton>
        </header>

        <surf-skeleton></surf-skeleton>
        <surf-skeleton></surf-skeleton>
        <surf-skeleton></surf-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header surf-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview surf-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview surf-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview surf-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview surf-skeleton:nth-child(4) {
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