import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  moduleId: module.id,
  selector: 'entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css'],
  providers: [EntryService]
})
export class EntryComponent implements OnInit {

  @Input()
  entry: Entry;
  @Input()
  editMode: boolean = false;

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    
  }
  
  addEntry(entry: Entry) {
    this.entryService.addEntry(entry);
  }

}
