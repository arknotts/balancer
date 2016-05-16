import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  moduleId: module.id,
  selector: 'entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  entry: Entry;

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    
  }
  
  delete(entry: Entry) {
    this.entryService.deleteEntry(entry);
  }

}
