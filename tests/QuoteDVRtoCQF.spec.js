import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages/openFerryHomePage.page');

test('Get Quote Dover to Calais', async ({ page }) => {
   const home = new HomePage(page);

 await home.goto();
 await expect(page.getByRole('heading', { name: 'We value your privacy' })).toBeVisible();
 await home.cookieBanner.acceptCookies();
 await expect(page.getByRole('heading', { name: 'Book your ferry tickets' })).toBeVisible();
 await home.selectReturnJourney();
 await home.ports.selectFromPort('Calais');
 await home.ports.selectToPort('Dover');
 await expect(page.getByText('Select date')).toBeVisible();
 await home.dateTime.selectOutboundDate('2026-02-12');
 await home.dateTime.selectReturnDate('2026-02-17');
 await home.dateTime.submitDateSelection();
 await expect(page.getByText('Select time')).toBeVisible();
 await home.dateTime.selectOutboundTime('morning'); 
 await home.dateTime.selectReturnTime('evening');
 await home.dateTime.submitTimeSelection();
 await expect(page.getByText('Adult')).toBeVisible();
 await home.passengerSelector.openPassengerSelector();
 await home.passengerSelector.setAdults(3);
 await home.passengerSelector.setPets(1);
 await home.passengerSelector.setCars(1);
 await home.passengerSelector.confirmSelection();
 await home.togglePopUnder();
 await home.submitSearch();
 await page.getByTestId('result-trip-0-route-normal-p&o-ferries-eyjhcii6ijiwmjytmdetmtigmdk6mdailcjjswqioijqt0yilcjjy3kioijhqlailcjkijoirljduuyilcjkzsi6ijiwmjytmdetmtigmdy6mzailcjvijoir0jevliilcjvchqionsiywqiojesimnhijoxfswicelkijoirelsrunux0zfuljjrvmilcjwy0lkijoinyj9-card').getByTestId('result-trip-route-card-select-button').click();
 await page.getByTestId('result-trip-1-route-discounted-p&o-ferries-eyjhcii6ijiwmjytmdetmtcgmtk6ntailcjjswqioijqt0yilcjjy3kioijhqlailcjkijoir0jevliilcjkzsi6ijiwmjytmdetmtcgmtk6mjailcjvijoirljduuyilcjvchqionsiywqiojesimnhijoxfswib3v0ijoizxlkagnpstzjakl3twpzde1erxrnvelnturrnk1eqwlmq0pqu1drau9pslfumflptenkalkza2lpaupiuwxbauxdsmtjam9pumxkrfvvwwlmq0prwlnjnklqsxdnall0turfde1uswdnrfk2txpbauxdsnzjam9pujbkrvzsswlmq0p2y0hrau9uc2lzv1fpt2pfc0lttmhjam94zln3awnfbgtjam9pukvsu1jvtlvymfpgvwxksljwtwlmq0p3wtbsa0lqb2loeuo5iiwicelkijoirelsrunux0zfuljjrvmilcjwy0lkijoinyj9-card').getByTestId('result-trip-route-card-select-button').click();
});

