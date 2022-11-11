import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TodoCategoryEnum } from 'src/app/core/models/todoCategoryEnum';
import { TodoItemDto, TodoItemService } from 'src/app/core/todo-api';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  list: TodoItemDto[];
  model: TodoItemDto = {};
  users: any[];
  submitted: boolean = false;
  todoEditDialog: boolean;
  selectedTodo: TodoItemDto;
  todoCategory: TodoCategoryEnum = TodoCategoryEnum.Pending;
  todoFilterEnum = TodoCategoryEnum;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private todoService: TodoItemService,
  ) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  todoCategoryChanged() {
    this.getTodoList();
  }

  getTodoList() {
    if (this.todoCategory == TodoCategoryEnum.Pending) {
      this.todoService.apiTodoItemPendingGet().subscribe(t => {
        this.list = t;
      });
    } else if (this.todoCategory == TodoCategoryEnum.Overdue) {
      this.todoService.apiTodoItemOverdueGet().subscribe(t => {
        this.list = t;
      });
    }
  }

  markAsDone(todo: TodoItemDto) {
    todo.isComplated = true;
    this.todoService.apiTodoItemIdPut(todo.id, todo).subscribe(result => { this.getTodoList(); });
  }
  
  showTodoEditDialog(todo: TodoItemDto) {
    this.selectedTodo = todo;
    this.todoEditDialog = true;
  }

  saveResult(result: boolean) {
    if (result) {
      this.todoEditDialog = false;
      this.getTodoList();
    } else {
      this.todoEditDialog = false;
    }
  }

  confirmDelete(event: Event, todoId: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure you want to delete this item?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'Cancel',
      accept: () => {
        this.todoService.apiTodoItemPost().subscribe(result => {
          this.messageService.add({ severity: 'success', summary: 'Todo Message', detail: "Update Successfully", life: 3000 });
          this.getTodoList();
          this.confirmationService.close();
        });
      },
      reject: () => {
        this.confirmationService.close();
      }
    });
  }
}



