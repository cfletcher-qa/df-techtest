class CookieBanner {
    constructor(page) {
        this.page = page;
        this.acceptButton = page.getByRole('button', { name: 'Accept' });
    }

    async acceptCookies() {
        await this.acceptButton.click();
    }       
}

module.exports = { CookieBanner };