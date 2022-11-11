import { Component, OnDestroy } from '@angular/core';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { Observable, Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, Event, NavigationError } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './app.breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnDestroy {

  // subscription: Subscription;

  // items: MenuItem[];

  // home: MenuItem;

  // constructor(public breadcrumbService: AppBreadcrumbService) {
  //     this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
  //         this.items = response;
  //     });

  //     this.home = { icon: 'pi pi-home', routerLink: '/' };
  // }

  // ngOnDestroy() {
  //     if (this.subscription) {
  //         this.subscription.unsubscribe();
  //     }
  // }




  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = { icon: 'pi pi-home', routerLink: '/admin/dashboard' };
  menuItems: MenuItem[];


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
          this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, routerLink: string = '#', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        routerLink += `/${routeURL}`;
      }

      const menuItem = child.snapshot.url.length == 0 || child.snapshot.data===null ?null: child.snapshot.data[AppBreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
      if (menuItem!=undefined && menuItem != null && menuItem.label !== null && menuItem.label != '') {
        breadcrumbs.push(menuItem);
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }
  }


}
