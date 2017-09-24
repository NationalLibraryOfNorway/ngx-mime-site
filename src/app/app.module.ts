import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpHandler, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MimeModule } from '@nationallibraryofnorway/ngx-mime';
import 'hammerjs';

import { CustomHttp } from './custom-http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { SamplesComponent } from './samples/samples.component';
import { ViewerComponent } from './viewer/viewer.component';

export function httpClientFactory(handler: HttpHandler) {
  return new CustomHttp(handler);
}

const appRoutes: Routes = [
  { path: 'samples', component: SamplesComponent },
  { path: 'viewer', component: ViewerComponent },
  {
    path: '',
    redirectTo: '/samples',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MimeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HttpClient, useFactory: httpClientFactory, deps: [HttpHandler] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
