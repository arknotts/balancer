import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';

@Component({
  moduleId: module.id,
  selector: 'entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  entry: Entry;

  constructor() {}

  ngOnInit() {
    
  }

}
