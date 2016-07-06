import { TestMaterialng2Page } from './app.po';

describe('test-materialng2 App', function() {
  let page: TestMaterialng2Page;

  beforeEach(() => {
    page = new TestMaterialng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test-materialng2 works!');
  });
});
