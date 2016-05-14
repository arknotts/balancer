import { Injectable } from '@angular/core';
import { Entry } from './entry';

@Injectable()
export class EntryService {

  ENTRIES: Entry[] = [
    {
      timestamp: new Date(),
      checkNumber: 1,
      debit: 23.40,
      credit: 0,
      description: "Luigi Vet"
    },
    {
      timestamp: new Date(),
      checkNumber: 2,
      debit: 0,
      credit: 25.40,
      description: "Corvette Exhaust"
    },
  ]

  constructor() {}
  
  getEntries() {
      return Promise.resolve(this.ENTRIES);
  }
  
  addEntry(entry: Entry) {
    this.ENTRIES.push(entry);
  }

}
