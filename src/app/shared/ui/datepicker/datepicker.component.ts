import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() initDate:string|null;
  @Input() minDate:string|null;
  @Input() maxDate:string|null;
  @Input() isRequired:boolean;
  @Input() class:string|null;

  public dateValue:Date;
  public minDateValue:Date|null;
  public maxDateValue:Date|null;

  public es:any;

  @Output() changeDate : EventEmitter<Date> = new EventEmitter();
  @Output() onClose : EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { 
    this.dateValue = !this.initDate ? new Date() : this.stringToDate(this.initDate);
    this.minDateValue = !this.minDate ? null : this.stringToDate(this.minDate);
    this.maxDateValue = !this.maxDate ? null : this.stringToDate(this.maxDate);        
  }

  stringToDate(stringDate:string):Date{
    if(!stringDate.split('T')[1]){
      var strDt=stringDate.split('.');
      return new Date(Number(strDt[2]),Number(strDt[1]),Number(strDt[0]));
    }else{
      return new Date(Date.parse(stringDate));
    } 
  }

  dateChanged(){
    this.changeDate.emit(this.dateValue);
  }

  onClosed(){
    this.onClose.emit(this.dateValue);
  }
}
