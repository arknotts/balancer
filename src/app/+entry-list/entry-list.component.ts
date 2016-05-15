import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { EntryComponent } from '../entry/entry.component';

@Component({
  moduleId: module.id,
  selector: 'entry-list',
  templateUrl: 'entry-list.component.html',
  styleUrls: ['entry-list.component.css'],
  providers: [EntryService],
  directives: [EntryComponent]
})
export class EntryListComponent implements OnInit {

  entries: Entry[];
  //TODO why can't we use the default constructor here?
  newEntry: Entry = {
      checkNumber: null,
      timestamp: new Date(),
      description: null,
      credit: null,
      debit: null
    };
  STARTING_BALANCE: number = 0;

  constructor(private entryService : EntryService) {}

  ngOnInit() {
    // this.entryService.getEntries().then(entries => this.entries = entries);
    
    this.entryService.entries$.subscribe(updatedEntries => {
      this.entries = updatedEntries;
    });
    
    this.entryService.loadAll();
    
    // this.entries = this.entryService.entries$;
  }
  
  addEntry(entry: Entry) {
    this.entryService.addEntry(entry);
    this.newEntry = {
      checkNumber: null,
      timestamp: new Date(),
      description: null,
      credit: null,
      debit: null
    };
  }
  
  getTotal() {
    var total: number = this.STARTING_BALANCE;
    
    this.entries.forEach(element => {
      if(element.debit != null) {
        total -= element.debit;
      }
      if(element.credit != null) {
        total += element.credit;
      }
    });
    
    return total;
  }

}
