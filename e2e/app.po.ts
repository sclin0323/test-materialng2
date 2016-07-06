export class TestMaterialng2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-materialng2-app h1')).getText();
  }
}
