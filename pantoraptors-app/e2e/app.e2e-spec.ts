import { PantoraptorsAppPage } from './app.po';

describe('pantoraptors-app App', () => {
  let page: PantoraptorsAppPage;

  beforeEach(() => {
    page = new PantoraptorsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
