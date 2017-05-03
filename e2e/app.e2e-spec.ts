import { PrepcoTemplatePage } from './app.po';

describe('prepco-template App', () => {
  let page: PrepcoTemplatePage;

  beforeEach(() => {
    page = new PrepcoTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
