import { AuthasyncPage } from './app.po';

describe('authasync App', function() {
  let page: AuthasyncPage;

  beforeEach(() => {
    page = new AuthasyncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
