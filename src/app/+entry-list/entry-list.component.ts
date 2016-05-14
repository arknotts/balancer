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
    checkNumber: 3,
    timestamp: new Date(),
    description: "fdsfa",
    credit: 1,
    debit: 0
  };

  constructor(private entryService : EntryService) {}

  ngOnInit() {
    this.entryService.getEntries().then(entries => this.entries = entries);
  }

}
