import { SoshaceTestPage } from './app.po';

describe('soshace-test App', () => {
  let page: SoshaceTestPage;

  beforeEach(() => {
    page = new SoshaceTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
