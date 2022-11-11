import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FullCalendarModule} from '@fullcalendar/angular';
import {ToastModule} from 'primeng/toast';
import {AppComponent} from './app.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutsModule } from './layouts/layouts.module';
import { environment } from 'src/environments/environment';
import { ApiModule, Configuration } from './core/todo-api';
import { LoaderService } from './core/services/loader.service';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';


FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    text:'Waiting...',
    logoUrl:"../assets/images/varank6.gif",
    logoPosition:'center-center',
    fgsSize:0,
    masterLoaderId:'master'
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        LayoutsModule,
        ToastModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule.forRoot({
            showForeground: true,
        }),
        ApiModule.forRoot(() => {
            return new Configuration({
                basePath: `${environment.apiUrl}`,
            });
        })
        ,
    ],
    declarations: [
        AppComponent,

    ],
    providers: [
        MessageService,
        ConfirmationService,
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
