import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

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
  ];
  
  entries$: Observable<Entry[]>;
  private _entriesObserver: Observer<Entry[]>;

  constructor() {
    this.entries$ = new Observable(observer => this._entriesObserver = observer).share();
  }
  
  loadAll() {
    this._entriesObserver.next(this.ENTRIES);
  }
  
  // getEntries() {
  //     return Promise.resolve(this.ENTRIES);
  // }
  
  addEntry(entry: Entry) {
    this.ENTRIES.push(entry);
    this._entriesObserver.next(this.ENTRIES);
  }
  
  deleteEntry(entry: Entry) {
    for(var i = 0; i<this.ENTRIES.length; i++)
    {
      if(this.ENTRIES[i].checkNumber == entry.checkNumber) 
      {
        this.ENTRIES.splice(i, 1);
      }
    }
    
    this._entriesObserver.next(this.ENTRIES);
  }

}
