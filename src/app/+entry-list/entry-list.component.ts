import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry.service';
import { EntryService } from '../entry.service';
import { EntryComponent } from '../entry/entry.component';
import { EntryEditComponent } from '../entry-edit/entry-edit.component';

@Component({
  moduleId: module.id,
  selector: 'entry-list',
  templateUrl: 'entry-list.component.html',
  styleUrls: ['entry-list.component.css'],
  providers: [EntryService],
  directives: [EntryComponent, EntryEditComponent]
})
export class EntryListComponent implements OnInit {

  entries: Entry[];
  //TODO why can't we use the default constructor here?
  newEntry: Entry = new Entry();
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
