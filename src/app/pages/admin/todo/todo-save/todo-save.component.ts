import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TodoItemDto, TodoItemService } from 'src/app/core/todo-api';

@Component({
  selector: 'todo-save',
  templateUrl: './todo-save.component.html',
  styleUrls: ['./todo-save.component.scss']
})
export class TodoSaveComponent implements OnInit {

  submitted:boolean;
  users:any[];
  model:TodoItemDto={};
  dueDate:Date | null;

  @Input()
  todoListDto:TodoItemDto;

  @Output()
  resultState : EventEmitter<boolean> = new EventEmitter();

  constructor(
    private todoService:TodoItemService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(){
    if(this.todoListDto){
      this.todoService.apiTodoItemIdGet(this.todoListDto.id).subscribe(t=>{
        this.model=t;
        this.dueDate = !this.model.dueDate ? null : new Date(this.model.dueDate);
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

    this.model.dueDate = !this.dueDate ? null : this.dueDate.toJSON();
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
