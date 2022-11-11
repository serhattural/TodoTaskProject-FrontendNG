import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Input()
  minLength:number=3;

  @Input()
  required:boolean;

  @Input()
  errorMessage:string;
  
  @Input()
  ngClass:string;

  @Input()
  selectableItemCount:number=3;

  @Input()
  field:string;

  @Input()
  labelText:string;

  @Input()
  placeholder:string;  

  @Input()
  filteredList: any[];

  @Output()
  filterEvent = new EventEmitter<string>();

  @Output()
  selectedItemsEvent = new EventEmitter<any[]>();

  @Input()
  selectedItems:any[];
  
  placeholderText:string;

  constructor() { }

  ngOnInit(): void {
  }

  filter(event: { query: string; }){    
    if(!this.selectedItems || this.selectedItems.length<this.selectableItemCount){
      this.filterEvent.emit(event.query);
    }    
  }

  selectedItemsReturn(){
    this.selectedItemsEvent.emit([...this.selectedItems]);
  }

  onFocus(){
    this.placeholderText=this.placeholder;
  }

  onBlur(){
    this.placeholderText="";
  }

  onUnselect(){
    this.selectedItemsEvent.emit([...this.selectedItems]);
  }
}
