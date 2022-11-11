import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" [appAuthRole]="item.roles"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(
        public app: AppComponent,
        ) { }

    async ngOnInit() {
        this.model=[];

        this.model.push(
            {
                label: 'Main',
                icon: 'pi pi-fw pi-id-card',
                items: [
                    { label: 'Todo List', routerLink: ['/admin/todos/todo-list'] },
                ]
            },
        );
    }
}
