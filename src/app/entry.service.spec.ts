import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { EntryService } from './entry.service';

describe('Entry Service', () => {
  beforeEachProviders(() => [EntryService]);

  it('should ...',
      inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));
});
