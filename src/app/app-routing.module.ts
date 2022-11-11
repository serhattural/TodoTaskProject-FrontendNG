import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, data: { breadcrumb: { label: 'Home', url: '/todo' } },
        children:
            [
                {
                    path: '', redirectTo: 'todo', pathMatch: 'full'
                },
                { 
                    path: 'todo', data: { breadcrumb: { label: 'Todo' } }, 
                    loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) 
                },
            ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }





