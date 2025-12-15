import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages/openFerryHomePage.page');

test('Get Quote from Calais to Dover', async ({ page }) => {
 const home = new HomePage(page);

 await home.goto();
 await expect(page.getByRole('heading', { name: 'We value your privacy' })).toBeVisible();
 await home.cookieBanner.acceptCookies();
 await expect(page.getByRole('heading', { name: 'Book your ferry tickets' })).toBeVisible();
 await home.selectReturnJourney();
 await home.ports.selectFromPort('Calais');
 await home.ports.selectToPort('Dover');
 await expect(page.getByText('Select date')).toBeVisible();
 await home.dateTime.selectOutboundDate('2026-02-19');
 await home.dateTime.selectReturnDate('2026-02-22');
 await home.dateTime.submitDateSelection();
 await expect(page.getByText('Select time')).toBeVisible();
 await home.dateTime.selectOutboundTime('afternoon'); 
 await home.dateTime.selectReturnTime('morning');
 await home.dateTime.submitTimeSelection();
 await expect(page.getByText('Adult')).toBeVisible();
 await home.passengerSelector.openPassengerSelector();
 await home.passengerSelector.setAdults(3);
 await home.passengerSelector.setPets(1);
 await home.passengerSelector.setCars(1);
 await home.passengerSelector.confirmSelection();
 await home.togglePopUnder();
 await home.submitSearch(); 
 await page.getByTestId('result-trip-0-route-normal-p&o-ferries-eyjhcii6ijiwmjytmdetmtkgmti6mzuilcjjswqioijqt0yilcjjy3kioijhqlailcjkijoir0jevliilcjkzsi6ijiwmjytmdetmtkgmti6mduilcjvijoirljduuyilcjvchqionsiywqiojisimnhijoxlcjwzsi6mx0sinbjzci6ikrjukvdvf9grvjssuvtiiwicgnjzci6ijcifq-card').getByTestId('result-trip-route-card-select-button').click();
 await page.getByTestId('result-trip-1-route-discounted-p&o-ferries-eyjhcii6ijiwmjytmdetmjigmdk6mdailcjjswqioijqt0yilcjjy3kioijhqlailcjkijoirljduuyilcjkzsi6ijiwmjytmdetmjigmdy6mzailcjvijoir0jevliilcjvchqionsiywqiojisimnhijoxlcjwzsi6mx0sim91dci6imv5smhjauk2swpjd01qwxrnrev0tvrrz01ustznelvptenkalnxuwlpauprvdbzauxdsmpzm2tpt2lksffsqwlmq0prswpvaviwskvwbelptenka1ptstzjakl3twpzde1erxrnvgtntvrjnk1evwlmq0p2swpvavjsskrvvvlptenkdmniuwlpbnnpwvdrau9qsxnjbu5oswpveexdsndau0k2tvgwc0luqkpaq0k2swtsslvrvkrwrjlhulzku1nvvlrjaxdpy0doslpdstzjamnpzleilcjwswqioijesvjfq1rfrkvsuklfuyisinbjswqioii3in0-card').getByTestId('result-trip-route-card-select-button').click();

});