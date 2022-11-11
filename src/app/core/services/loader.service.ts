import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  
    //constructor(private ngxService:NgxUiLoaderService) {}
    isLoading = new Subject<boolean>();
    show() {
        //this.ngxService.startLoader('master');
        this.isLoading.next(true);
    }
    hide() {
        //this.ngxService.stopLoader('master');
        this.isLoading.next(false);
    }
}