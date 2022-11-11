import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
    {
    path: 'admin', component: MainLayoutComponent, data:{ breadcrumb:{label:'Yönetici',url:'/admin/dashboard'}}, children:
        [
            { path: 'periods', data:{ breadcrumb:{label:'TODO List'}}, loadChildren: () => import('./pages/admin/period/period.module').then(m => m.PeriodModule) },
            { path: '**', redirectTo: '/admin/periods'}
        ]
    },
    { path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }





