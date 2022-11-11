import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgSharedModule } from '../shared/primeng.shared.module';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { AppBreadcrumbComponent } from './breadcrumb/app.breadcrumb.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppMenuitemComponent } from './menu/app.menuitem.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    LoggedUserComponent,
    AppFooterComponent,
    AppTopBarComponent,
    AppBreadcrumbComponent,
    AppMenuComponent,
    AppMenuitemComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgSharedModule,
    SharedModule
  ],
  exports: [

  ]
})
export class LayoutsModule { }
