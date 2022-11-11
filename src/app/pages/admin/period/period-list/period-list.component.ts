import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TodoItemDto, TodoItemService } from 'src/app/core/todo-api';


@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.scss']
})
export class PeriodListComponent implements OnInit {
  list:TodoItemDto[];
  model:TodoItemDto={};
  users:any[];
  submitted:boolean=false;
  periodEditDialog:boolean;
  selectedTodo: TodoItemDto;

  constructor(
    private messageService:MessageService,
    private confirmationService:ConfirmationService,
    private todoService:TodoItemService,
  ) { }

  ngOnInit(): void {
    this.getPendingTodos();
  }

  getPendingTodos(){
    this.todoService.apiTodoItemPendingGet().subscribe(t=>{
      this.list=t;
    });
  }

  showPeriodEditDialog(todo:TodoItemDto){
    this.selectedTodo=todo;
    this.periodEditDialog=true;
  }

  saveResult(result:boolean){
    if(result){
      this.periodEditDialog=false;
      this.getPendingTodos();
    }else{
      this.periodEditDialog=false;
    }
  }

  confirmDelete(event: Event, todoId:string) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to delete this item?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel:'Yes',
        rejectLabel:'Cancel',
        accept: () => {
            this.todoService.apiTodoItemPost().subscribe(result=>{
              this.messageService.add({ severity: 'success', summary: 'Todo Message', detail: "Update Successfully", life: 3000 });
              this.getPendingTodos();
              this.confirmationService.close();
            });
        },
        reject: () => {
            this.confirmationService.close();
        }
    });
  }

  changeActive(todo:TodoItemDto){
    this.todoService.apiTodoItemIdPut(todo.id, todo).subscribe( result =>{ this.getPendingTodos();});
  }
}


