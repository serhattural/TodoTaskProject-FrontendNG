import {Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer p-d-flex p-ai-center p-jc-center p-p-2 p-shadow-2 text-center">
            <p class="p-text-secondary">T.C. Enerji ve Tabii Kaynaklar Bakanlığı - Bilgi İşlem Dairesi Başkanlığı</p>
        </div>
    `
})
export class AppFooterComponent {
    constructor(public app: AppComponent) {}
}
