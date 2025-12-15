class DateTime {
    constructor(page) {
        this.page = page;
        this.dateSubmitButton = page.getByTestId('search-widget-date-selector-footer-submit-button');
    }

    async selectDates(year, month, outboundDay, returnDay) {
        const calendar = this.page.getByTestId(`calendar-container-year-${year}-month-${month}`);

        await calendar.getByRole('button', { name: outboundDay.toString() }).click();
        await calendar.getByRole('button', { name: returnDay.toString() }).click();
        await this.dateSubmitButton.click();
    }

    async selectTimes(outboundSlot, returnSlot) {
        await this.page.getByText('Select time').click();
        await this.page.getByTestId(outboundSlot).click();
        await this.page.getByTestId(returnSlot).click();
        await this.dateSubmitButton.click();
    }

    async selectOutboundDate(dateString) {
        const [year, month, day] = dateString.split('-').map(Number);
        const monthIndex = month - 1;
        await this.page.getByText('Select date').click();
        const calendar = this.page.getByTestId(`calendar-container-year-${year}-month-${monthIndex}`);
        await calendar.getByRole('button', { name: String(day) }).click();
    }

    async selectReturnDate(dateString) {
        const [year, month, day] = dateString.split('-').map(Number);
        const monthIndex = month - 1;
        const calendar = this.page.getByTestId(`calendar-container-year-${year}-month-${monthIndex}`);
        await calendar.getByRole('button', { name: String(day) }).click();
    }

    async submitDateSelection() {
        await this.dateSubmitButton.click();
    }

    async selectOutboundTime(slotName) {
        await this.page.getByText('Select time').click();
        const testId = `search-widget-date-selector-time-outbound-slot-${slotName}`;
        await this.page.getByTestId(testId).click();
    }

    async selectReturnTime(slotName) {
        const testId = `search-widget-date-selector-time-return-slot-${slotName}`;
        await this.page.getByTestId(testId).click();
    }

    async submitTimeSelection() {
        await this.dateSubmitButton.click();
    }
}

module.exports = { DateTime };