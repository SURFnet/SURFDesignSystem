export default {
  component: 'sl-card',
  render() {
    return `
      <sl-card class="card-overview">
        <img
          slot="image"
          src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt="A kitten sits patiently between a terracotta pot and decorative grasses."
        />
          
        <strong>Mittens</strong><br />
        This kitten is as cute as he is playful. Bring him home today!<br />
        <small>6 weeks old</small>
          
        <div slot="footer">
          <sl-button variant="primary" pill>More Info</sl-button>
          <sl-rating></sl-rating>
        </div>
      </sl-card>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};