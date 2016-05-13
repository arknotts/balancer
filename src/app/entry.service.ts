import { Injectable } from '@angular/core';
import { Entry } from './entry';

@Injectable()
export class EntryService {

  ENTRIES: Entry[] = [
    {
      timestamp: new Date(),
      checkNumber: 1,
      debit: 23.40,
      credit: 0
    },
    {
      timestamp: new Date(),
      checkNumber: 2,
      debit: 23.40,
      credit: 0
    },
  ]

  constructor() {}
  
  getEntries() {
      return Promise.resolve(this.ENTRIES);
  }

}
