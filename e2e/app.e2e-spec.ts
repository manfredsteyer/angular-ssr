import { Ng4CliDemoPage } from './app.po';

describe('ng4-cli-demo App', () => {
  let page: Ng4CliDemoPage;

  beforeEach(() => {
    page = new Ng4CliDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
