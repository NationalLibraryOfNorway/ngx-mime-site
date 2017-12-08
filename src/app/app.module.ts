import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpHandler, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MimeModule } from '@nationallibraryofnorway/ngx-mime';
import 'hammerjs';

import { environment } from '../environments/environment';
import { MimeSiteMaterialModule } from './mime-site-material.module';
import { CustomHttp } from './custom-http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { SamplesComponent } from './samples/samples.component';
import { ViewerComponent, CloseButtonComponent } from './viewer/viewer.component';

export function httpClientFactory(handler: HttpHandler) {
  return new CustomHttp(handler);
}

const appRoutes: Routes = [
  { path: '', component: SamplesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    SamplesComponent,
    CloseButtonComponent
  ],
  entryComponents: [
    ViewerComponent,
    CloseButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MimeModule,
    MimeSiteMaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HttpClient, useFactory: httpClientFactory, deps: [HttpHandler] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
