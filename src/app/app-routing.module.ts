import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
    {
    path: 'admin', component: MainLayoutComponent, data:{ breadcrumb:{label:'Admin',url:'/admin/todos'}}, children:
        [
            { path: 'todos', data:{ breadcrumb:{label:'TODO List'}}, loadChildren: () => import('./pages/admin/todo/todo.module').then(m => m.TodoModule) },
            { path: '**', redirectTo: '/admin/todos'}
        ]
    },
    { path: '**', redirectTo: '/admin/todos'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }





