import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgSharedModule } from './primeng.shared.module';
import { DatepickerComponent } from './ui/datepicker/datepicker.component';
import { NotCompeletedPageComponent } from './ui/not-compeleted-page/not-compeleted-page.component';
import { AutoCompleteComponent } from './ui/auto-complete/auto-complete.component';

@NgModule({
  declarations: [DatepickerComponent, NotCompeletedPageComponent, AutoCompleteComponent],
  imports: [
    CommonModule,
    PrimeNgSharedModule
  ],
  exports: [
    DatepickerComponent,
    AutoCompleteComponent,
    NotCompeletedPageComponent
  ]
})
export class SharedModule { }
