import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://openferry.com/');
  await page.getByRole('heading', { name: 'We value your privacy' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('heading', { name: 'Book your ferry tickets' }).click();
  await page.getByTestId('home-search-widget-outbound-popup-port-field-input').click();
  await page.getByTestId('home-search-widget-outbound-popup-port-field-input').fill('Dover');
  await page.getByTestId('search-widget-outbound-destinations-port-result-GBDVR').click();
  await page.getByTestId('home-search-widget-return-popup-port-field-input').click();
  await page.getByTestId('search-widget-return-popular-destination-port-result-FRCQF').click();
  await page.getByTestId('calendar-container-year-2026-month-1').getByRole('button', { name: '12' }).click();
  await page.getByText('Select date').click();
  await page.getByTestId('calendar-container-year-2026-month-1').getByRole('button', { name: '17' }).click();
  await page.getByTestId('search-widget-date-selector-footer-submit-button').click();
  await page.getByText('Select time').click();
  await page.getByTestId('search-widget-date-selector-time-outbound-slot-morning').click();
  await page.getByTestId('search-widget-date-selector-time-return-slot-evening').click();
  await page.getByTestId('search-widget-date-selector-footer-submit-button').click();
  await page.getByTestId('search-widget-quote-selector-popup-adult-container').getByTestId('counter-plus').click();
  await page.getByTestId('search-widget-quote-selector-popup-car-container').getByTestId('counter-plus').click();
  await page.getByTestId('search-widget-quote-selector-popup-confirm').click();
  await page.locator('._9e4bzz4').first().click();
  await page.getByRole('button', { name: 'search Search' }).click();
  await page.getByTestId('result-trip-0-route-normal-p&o-ferries-eyjhcii6ijiwmjytmdetmtigmdk6mdailcjjswqioijqt0yilcjjy3kioijhqlailcjkijoirljduuyilcjkzsi6ijiwmjytmdetmtigmdy6mzailcjvijoir0jevliilcjvchqionsiywqiojesimnhijoxfswicelkijoirelsrunux0zfuljjrvmilcjwy0lkijoinyj9-card').getByTestId('result-trip-route-card-select-button').click();
  await page.getByTestId('result-trip-1-route-discounted-p&o-ferries-eyjhcii6ijiwmjytmdetmtcgmtk6ntailcjjswqioijqt0yilcjjy3kioijhqlailcjkijoir0jevliilcjkzsi6ijiwmjytmdetmtcgmtk6mjailcjvijoirljduuyilcjvchqionsiywqiojesimnhijoxfswib3v0ijoizxlkagnpstzjakl3twpzde1erxrnvelnturrnk1eqwlmq0pqu1drau9pslfumflptenkalkza2lpaupiuwxbauxdsmtjam9pumxkrfvvwwlmq0prwlnjnklqsxdnall0turfde1uswdnrfk2txpbauxdsnzjam9pujbkrvzsswlmq0p2y0hrau9uc2lzv1fpt2pfc0lttmhjam94zln3awnfbgtjam9pukvsu1jvtlvymfpgvwxksljwtwlmq0p3wtbsa0lqb2loeuo5iiwicelkijoirelsrunux0zfuljjrvmilcjwy0lkijoinyj9-card').getByTestId('result-trip-route-card-select-button').click();
  await page.getByTestId('results-submit-button-floating-false').click();
});