import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodListComponent } from './period-list/period-list.component';

const routes: Routes = [ 
  { path: 'period-list', component: PeriodListComponent, data:{ breadcrumb:{label:'Dönem Listesi'}} }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
