import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
    providedIn:'root'
})
export class AppBreadcrumbService {

    private itemsSource = new Subject<MenuItem[]>();

    itemsHandler = this.itemsSource.asObservable();

    setItems(items: MenuItem[]) {
        this.itemsSource.next(items);
    }

    
}
