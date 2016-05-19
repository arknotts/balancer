import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  moduleId: module.id,
  selector: 'entry-edit',
  templateUrl: 'entry-edit.component.html',
  styleUrls: ['entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  @Input()
  entry: Entry;

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.entry = {
      checkNumber: null,
      timestamp: new Date(),
      description: null,
      credit: null,
      debit: null
    };
  }
  
  addEntry(entry: Entry) {
    this.entryService.addEntry(entry);
    this.entry = {
      checkNumber: null,
      timestamp: new Date(),
      description: null,
      credit: null,
      debit: null
    };
  }

}
