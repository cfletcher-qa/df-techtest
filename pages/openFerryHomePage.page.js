const { CookieBanner } = require('./sections/cookieBanner.section');
const { Ports } = require('./sections/ports.section');
const { DateTime } = require('./sections/dateTime.section');
const { Passengers } = require('./sections/passengers.section');

class HomePage {
  constructor(page) {
    this.page = page;

    this.cookieBanner = new CookieBanner(page);
    this.ports = new Ports(page);
    this.dateTime = new DateTime(page);
    this.passengers = new Passengers(page);
    this.returnJourney = page.getByTestId('search-widget-search-return-segment');
    this.searchButton = page.getByRole('button', { name: /search/i });
  }

  async goto() {
    await this.page.goto('https://openferry.com/');
  }

  async selectReturnJourney() {
    await this.returnJourney.click();
  }

  async togglePopUnder() {
    await this.page.getByTestId('search-widget-pop-under-toggle-label').first().click();
  }

  async search() {
    await this.searchButton.click();
  }

  async submitSearch() {
    await this.search();
  }
}

module.exports = { HomePage };
