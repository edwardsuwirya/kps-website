import { Kps2Page } from './app.po';

describe('kps2 App', () => {
  let page: Kps2Page;

  beforeEach(() => {
    page = new Kps2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
