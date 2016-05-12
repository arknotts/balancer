export class BalancerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('balancer-app h1')).getText();
  }
}
