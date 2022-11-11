import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './core/services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topbarTheme: string = 'kurumsal';

  menuTheme: string = 'light';

  layoutMode: string = 'light';

  menuMode: string = 'static';

  inlineMenuPosition: string = 'bottom';

  inputStyle: string = 'outlined';

  ripple: boolean = true;

  isRTL: boolean = false;


  isLoading: Subject<boolean>;
  constructor(private primengConfig: PrimeNGConfig,private loaderService: LoaderService,private cdr: ChangeDetectorRef,
   ) {}

  async ngOnInit() {
      this.primengConfig.ripple = true;

  }
  ngAfterViewChecked(){
    this.isLoading=this.loaderService.isLoading;
    this.cdr.detectChanges();
 }

}
