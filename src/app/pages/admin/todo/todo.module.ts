import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgSharedModule } from 'src/app/shared/primeng.shared.module';
import { TodoSaveComponent } from './todo-save/todo-save.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoSaveComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    PrimeNgSharedModule,
    SharedModule
  ]
})
export class TodoModule { }
