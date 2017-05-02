import { A2wpPage } from './app.po';

describe('a2wp App', () => {
  let page: A2wpPage;

  beforeEach(() => {
    page = new A2wpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
