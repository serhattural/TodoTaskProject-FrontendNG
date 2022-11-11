import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { PeriodListComponent } from './period-list/period-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgSharedModule } from 'src/app/shared/primeng.shared.module';
import { PeriodSaveComponent } from './period-save/period-save.component';


@NgModule({
  declarations: [
    PeriodListComponent,
    PeriodSaveComponent
  ],
  imports: [
    CommonModule,
    PeriodRoutingModule,
    PrimeNgSharedModule,
    SharedModule
  ]
})
export class PeriodModule { }
