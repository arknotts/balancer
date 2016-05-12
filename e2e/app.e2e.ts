import { BalancerPage } from './app.po';

describe('balancer App', function() {
  let page: BalancerPage;

  beforeEach(() => {
    page = new BalancerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('balancer works!');
  });
});
