class Passengers {
  constructor(page) {
    this.page = page;
    this.confirmButton = page.getByTestId('search-widget-quote-selector-popup-confirm');
  }

  async add(type, times = 1) {
    const container = this.page.getByTestId(`search-widget-quote-selector-popup-${type}-container`);
    for (let i = 0; i < times; i++) {
      await container.getByTestId('counter-plus').click();
    }
  }

  async confirm() {
    await this.confirmButton.click();
  }

  async openPassengerSelector() {
    await this.page.getByText('Adult').first().click();
  }

  async setAdults(n) {
    if (!n || n <= 0) return;
    const times = Math.max(0, n);
    await this.add('adult', times);
  }

  async setPets(n) {
    if (!n || n <= 0) return;
    await this.add('pet', n);
  }

  async setCars(n) {
    if (!n || n <= 0) return;
    await this.add('car', n);
  }

  async confirmSelection() {
    await this.confirm();
  }
}

module.exports = { Passengers };
