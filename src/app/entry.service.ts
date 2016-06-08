import { Injectable } from '@angular/core';
//import { Entry } from './entry';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
    debit: number = 0;
    credit: number = 0;
    description: string;
    
    private __timestamp: Date = new Date();
}

export abstract class EntryService {
  entries$: Observable<Entry[]>;
  abstract loadAll();
  abstract addEntry(entry: Entry);
  abstract deleteEntry(entry: Entry);
  abstract nextCheckNumber() : number;
}

@Injectable()
export class APIEntryService extends EntryService {

  private _headers : Headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  private _requestOptions: RequestOptions = new RequestOptions({headers: this._headers});

  ENTRIES: Entry[] = new Array<Entry>();
  
  entries$: Observable<Entry[]>;
  protected _entriesObserver: Observer<Entry[]>;
  // protected idCounter: number = 10;

  constructor(private http: Http) {
    super();

    
    this.entries$ = new Observable(observer => this._entriesObserver = observer).share();
  }
  
  loadAll() {
    this._entriesObserver.next(this.ENTRIES);
  }
  
  private onEntryAdded(entry) {
    console.log('on entry added', entry);
    this.ENTRIES.push(entry);
    this._entriesObserver.next(this.ENTRIES);
  }

  addEntry(entry: Entry) {
    let body = JSON.stringify(entry);
    this.http.post('http://localhost:3000/entries', body, this._requestOptions)
      .map(res => res.text())
      .subscribe(
        data => this.onEntryAdded(entry),
        err => console.log("error:", err),
        () => console.log('complete')
      );
    
    
    // entry.id = this.idCounter;
    // this.idCounter = this.idCounter + 1;
    // this.ENTRIES.push(entry);
    // this._entriesObserver.next(this.ENTRIES);
  }
  
  deleteEntry(entry: Entry) {
    // for(var i = 0; i<this.ENTRIES.length; i++)
    // {
    //   if(this.ENTRIES[i].id == entry.id) 
    //   {
    //     this.ENTRIES.splice(i, 1);
    //   }
    // }
    
    // this._entriesObserver.next(this.ENTRIES);
  }
  
  nextCheckNumber() : number {
    return 5;
    // let max : number = 1;
    // this.ENTRIES.forEach(function(entry: Entry) {
    //   max = Math.max(entry.checkNumber, max);
    // });
    
    // return max + 1;
  }

}

@Injectable()
export class InMemoryEntryService extends EntryService {

  ENTRIES: Entry[]; 
  
  entries$: Observable<Entry[]>;
  protected _entriesObserver: Observer<Entry[]>;
  protected idCounter: number = 10;

  constructor() {
    super();
    
    this.ENTRIES = new Array<Entry>();
    
    var e = new Entry();
    e.id = 1;
    e.timestamp = new Date().toISOString().substring(0, 10);;
    e.checkNumber = 1;
    e.debit = 23.40;
    e.credit = 0;
    e.description = "test 1";
    this.ENTRIES.push(e);
    
    e = new Entry();
    e.id = 2;
    e.timestamp = new Date().toISOString().substring(0, 10);;
    e.checkNumber = 2;
    e.debit = 0;
    e.credit = 25;
    e.description = "test 2";
    this.ENTRIES.push(e);
    
    this.entries$ = new Observable(observer => this._entriesObserver = observer).share();
  }
  
  loadAll() {
    this._entriesObserver.next(this.ENTRIES);
  }
  
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
  
  nextCheckNumber() : number {
    let max : number = 1;
    this.ENTRIES.forEach(function(entry: Entry) {
      max = Math.max(entry.checkNumber, max);
    });
    
    return max + 1;
  }

}