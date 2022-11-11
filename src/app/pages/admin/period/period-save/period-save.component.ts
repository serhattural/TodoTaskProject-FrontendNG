import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TodoItemDto, TodoItemService } from 'src/app/core/todo-api';

@Component({
  selector: 'period-save',
  templateUrl: './period-save.component.html',
  styleUrls: ['./period-save.component.scss']
})
export class PeriodSaveComponent implements OnInit {

  submitted:boolean;
  users:any[];
  model:TodoItemDto={};

  @Input()
  todoListDto:TodoItemDto;

  @Output()
  resultState : EventEmitter<boolean> = new EventEmitter();

  constructor(
    private todoService:TodoItemService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.getPeriod();
  }

  getPeriod(){
    if(this.todoListDto){
      this.todoService.apiTodoItemIdGet(this.todoListDto.id).subscribe(t=>{
        this.model=t;
      });
      return;
    }
    this.model={};
  }

  save(){
    this.submitted=true;
    if(!this.model.title){
      this.messageService.add({severity:'warn', summary:'Warning', detail:"Check the fields"});
      return;
    }

    if(this.todoListDto){
      this.todoService.apiTodoItemIdPut(this.model.id,this.model).subscribe(result=>{
        this.submitted=false;
        this.messageService.add({ severity: 'success', summary: 'Todo', detail: "Update successfull", life: 3000 });
        this.resultState.emit(true);
      });
    }else{
      this.todoService.apiTodoItemPost(this.model).subscribe(result=>{
        this.submitted=false;
        this.messageService.add({ severity: 'success', summary: 'Todo', detail: "Add successfull", life: 3000 });
        this.resultState.emit(true);
      });
    }
  }

  cancel(){
    this.resultState.emit(false);
  }
}
