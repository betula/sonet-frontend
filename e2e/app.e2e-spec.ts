import { SonetFrontendNgPage } from './app.po';

describe('sonet-frontend-ng App', () => {
  let page: SonetFrontendNgPage;

  beforeEach(() => {
    page = new SonetFrontendNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
