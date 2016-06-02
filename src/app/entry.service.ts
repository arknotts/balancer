import { Injectable } from '@angular/core';
//import { Entry } from './entry';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

export class Entry  {
  
    constructor() {
    }
    
    set timestamp(timestamp: string){
      var split = timestamp.split('-');
      this.__timestamp.setFullYear(parseInt(split[0]), parseInt(split[1])-1, parseInt(split[2])-1);
    }

    get timestamp(){
      return this.__timestamp.toISOString().substring(0, 10);
    }
    
    id: number;
    checkNumber: number;
    debit: number;
    credit: number = 0;
    description: string;
    
    private __timestamp: Date = new Date();
}

@Injectable()
export class EntryService {

  ENTRIES: Entry[]; 
  // = [
  //   {
  //     timestamp: new Date()
  //     checkNumber: 1,
  //     debit: 23.40,
  //     credit: 0,
  //     description: "Luigi Vet"
  //   },
  //   {
  //     timestamp: new Date(),
  //     checkNumber: 2,
  //     debit: 0,
  //     credit: 25.40,
  //     description: "Corvette Exhaust"
  //   },
  // ];
  
  entries$: Observable<Entry[]>;
  private _entriesObserver: Observer<Entry[]>;
  private idCounter: number = 10;

  constructor() {
    this.ENTRIES = new Array<Entry>();
    
    var e = new Entry();
    e.id = 1;
    e.timestamp = new Date().toISOString().substring(0, 10);;
    e.checkNumber = 1;
    e.debit = 23.40;
    e.credit = 0;
    e.description = "Luigi Vet";
    this.ENTRIES.push(e);
    
    e = new Entry();
    e.id = 2;
    e.timestamp = new Date().toISOString().substring(0, 10);;
    e.checkNumber = 2;
    e.debit = 0;
    e.credit = 25;
    e.description = "Corvette Exhaust";
    this.ENTRIES.push(e);
    
    this.entries$ = new Observable(observer => this._entriesObserver = observer).share();
  }
  
  loadAll() {
    this._entriesObserver.next(this.ENTRIES);
  }
  
  // getEntries() {
  //     return Promise.resolve(this.ENTRIES);
  // }
  
  addEntry(entry: Entry) {
    entry.id = this.idCounter;
    this.idCounter = this.idCounter + 1;
    this.ENTRIES.push(entry);
    this._entriesObserver.next(this.ENTRIES);
  }
  
  deleteEntry(entry: Entry) {
    for(var i = 0; i<this.ENTRIES.length; i++)
    {
      if(this.ENTRIES[i].id == entry.id) 
      {
        this.ENTRIES.splice(i, 1);
      }
    }
    
    this._entriesObserver.next(this.ENTRIES);
  }

}
