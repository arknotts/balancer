import { Component, Renderer, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Entry } from '../entry.service';
import { EntryService } from '../entry.service';

@Component({
  moduleId: module.id,
  selector: '[entryEdit]',
  templateUrl: 'entry-edit.component.html',
  styleUrls: ['entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  @Input()
  entryEdit: Entry = new Entry();
  
  @ViewChild('inputDescription')
  inputDescription: ElementRef;
  
  isValid: boolean = null;

  constructor(private entryService: EntryService, private renderer: Renderer) {}

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    
  }
  
  validate() {
    //TODO this still needs some work
    var valid = this.entryEdit.description != null &&
       this.entryEdit.timestamp != null &&
       (this.entryEdit.credit == null || this.entryEdit.credit >= 0) &&
       (this.entryEdit.debit == null || this.entryEdit.debit >= 0) &&
       this.entryEdit.credit != this.entryEdit.debit;
       
    if(!valid) {
      this.isValid = false;
    }
    else {
      this.isValid = true;
    }
  }
  
  addEntry() {
    this.validate();
    
    if(this.isValid) { 
      this.entryService.addEntry(this.entryEdit);
      this.entryEdit = new Entry();
      
      //re-focus description box
      this.renderer.invokeElementMethod(this.inputDescription.nativeElement, "focus", []);
      
      this.isValid = true;
    }
  }

}
