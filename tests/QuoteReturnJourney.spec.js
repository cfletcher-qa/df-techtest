import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages/openFerryHomePage.page');

let home;

test.beforeEach(async ({ page }) => {
  home = new HomePage(page);

  await home.goto();
  await expect(page.getByRole('heading', { name: 'We value your privacy' })).toBeVisible();
  await home.cookieBanner.acceptCookies();
  await expect(page.getByRole('heading', { name: 'Book your ferry tickets' })).toBeVisible();
});

test('Get Quote Return Journey from Calais to Dover', async ({ page }) => {
 const home = new HomePage(page);

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
 await home.passengers.openPassengerSelector();
 await home.passengers.setAdults(2);
 await home.passengers.setPets(1);
 await home.passengers.setCars(1);
 await home.passengers.confirmSelection();
 await home.togglePopUnder();
 await home.submitSearch(); 
 await page.getByTestId('result-trip-0-route-normal-p&o-ferries-eyjhcii6ijiwmjytmdetmtkgmti6mzuilcjjswqioijqt0yilcjjy3kioijhqlailcjkijoir0jevliilcjkzsi6ijiwmjytmdetmtkgmti6mduilcjvijoirljduuyilcjvchqionsiywqiojisimnhijoxlcjwzsi6mx0sinbjzci6ikrjukvdvf9grvjssuvtiiwicgnjzci6ijcifq-card').getByTestId('result-trip-route-card-select-button').click();
 await page.getByTestId('result-trip-1-route-discounted-p&o-ferries-eyjhcii6ijiwmjytmdetmjigmdk6mdailcjjswqioijqt0yilcjjy3kioijhqlailcjkijoirljduuyilcjkzsi6ijiwmjytmdetmjigmdy6mzailcjvijoir0jevliilcjvchqionsiywqiojisimnhijoxlcjwzsi6mx0sim91dci6imv5smhjauk2swpjd01qwxrnrev0tvrrz01ustznelvptenkalnxuwlpauprvdbzauxdsmpzm2tpt2lksffsqwlmq0prswpvaviwskvwbelptenka1ptstzjakl3twpzde1erxrnvgtntvrjnk1evwlmq0p2swpvavjsskrvvvlptenkdmniuwlpbnnpwvdrau9qsxnjbu5oswpveexdsndau0k2tvgwc0luqkpaq0k2swtsslvrvkrwrjlhulzku1nvvlrjaxdpy0doslpdstzjamnpzleilcjwswqioijesvjfq1rfrkvsuklfuyisinbjswqioii3in0-card').getByTestId('result-trip-route-card-select-button').click();

});

test('Get Quote Return Journey Dover to Calais', async ({ page }) => {
   const home = new HomePage(page);

 await home.selectReturnJourney();
 await home.ports.selectFromPort('Dover');
 await home.ports.selectToPort('Calais');
 await expect(page.getByText('Select date')).toBeVisible();
 await home.dateTime.selectOutboundDate('2026-02-12');
 await home.dateTime.selectReturnDate('2026-02-17');
 await home.dateTime.submitDateSelection();
 await expect(page.getByText('Select time')).toBeVisible();
 await home.dateTime.selectOutboundTime('morning'); 
 await home.dateTime.selectReturnTime('evening');
 await home.dateTime.submitTimeSelection();
 await expect(page.getByText('Adult')).toBeVisible();
 await home.passengers.openPassengerSelector();
 await home.passengers.setAdults(3);
 await home.passengers.setPets(1);
 await home.passengers.setCars(1);
 await home.passengers.confirmSelection();
 await home.togglePopUnder();
 await home.submitSearch();
 await page.getByTestId('result-trip-0-route-normal-dfds-seaways-eyjhcii6ijiwmjytmdetmtigmdy6nduilcjjswqioijot1jgiiwiy2n5ijoir0jqiiwizci6ikdcrfzsiiwizguioiiymdi2ltaxlteyida2oja1iiwibyi6ikzsq1fgiiwib3b0ijp7imfkijozlcjjysi6mswicguiojf9lcjwswqioijesvjfq1rfrkvsuklfuyisinbjswqioii2in0-card').getByTestId('result-trip-route-card-select-button').click();
 await page.getByTestId('result-trip-1-route-discounted-dfds-seaways-eyjhcii6ijiwmjytmdetmtcgmja6ntailcjjswqioijot1jgiiwiy2n5ijoir0jqiiwizci6ikzsq1fgiiwizguioiiymdi2ltaxlte3ide4ojewiiwibyi6ikdcrfzsiiwib3b0ijp7imfkijozlcjjysi6mswicguiojf9lcjvdxqioijleupoy2ljnklqsxdnall0turfde1uswdnrfk2tkrvauxdsmptv1fpt2lkt1qxskdjaxdpwtjonulqb2lsmeprswl3avpdstzja2rdukzau0lpd2lar1vpt2ljeu1estjmvef4tfrfeuleqtjpakexswl3awj5stzja1ptutfgr0lpd2lim0iwswpwn0ltrmtjam96tenkalltstznu3dpy0dvau9qrjlmq0p3u1drau9pskvtvkpgutfszljrvlnva2xgvxljc0luqmptv1fpt2ljmklumcisinbjzci6ikrjukvdvf9grvjssuvtiiwicgnjzci6ijyifq-card').getByTestId('result-trip-route-card-select-button').click();
});