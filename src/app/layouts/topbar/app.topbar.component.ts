import { environment } from 'src/environments/environment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    animations: [
        trigger('topbarActionPanelAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scaleY(0.8)' }),
                animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
            ]),
            transition(':leave', [
                animate('.1s linear', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class AppTopBarComponent implements OnInit {

    constructor(public appMain: MainLayoutComponent,
        public app: AppComponent,
        private router:Router) {
    }

    appName:string;

    activeItem: number;

    async ngOnInit(): Promise<void> {
        this.appName=environment.applicationName;
    }

    logout(){

    }
}
