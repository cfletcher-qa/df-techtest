const { FROM_PORTS, TO_PORTS } = require('../locators/Ports.locators');

class Ports {
  constructor(page) {
    this.page = page;
    this.fromPortInput = page.getByTestId('home-search-widget-outbound-popup-port-field-input');
    this.toPortInput = page.getByTestId('home-search-widget-return-popup-port-field-input');
  }


  async selectFromPort(portKey) {
    const key = String(portKey).toUpperCase();
    const testID = FROM_PORTS[key];
    if (!testID) throw new Error(`Port key "${portKey}" not found in FROM_PORTS`);

    await this.fromPortInput.click();
    await this.fromPortInput.fill(portKey);
    await this.page.getByTestId(testID).click();
  }

  async selectToPort(portKey) {
    const key = String(portKey).toUpperCase();
    const testID = TO_PORTS[key];
    if (!testID) throw new Error(`Port key "${portKey}" not found in TO_PORTS`);

    await this.toPortInput.click();
    await this.toPortInput.fill(portKey);
    await this.page.getByTestId(testID).click();
  }
}

module.exports = { Ports };
