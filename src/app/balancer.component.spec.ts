import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BalancerAppComponent } from '../app/balancer.component';

beforeEachProviders(() => [BalancerAppComponent]);

describe('App: Balancer', () => {
  it('should create the app',
      inject([BalancerAppComponent], (app: BalancerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'balancer works!\'',
      inject([BalancerAppComponent], (app: BalancerAppComponent) => {
    expect(app.title).toEqual('balancer works!');
  }));
});
