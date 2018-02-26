import { FastitPage } from './app.po';

describe('fastit App', function() {
  let page: FastitPage;

  beforeEach(() => {
    page = new FastitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
