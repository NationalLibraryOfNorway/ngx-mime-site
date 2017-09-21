import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpHandler, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MimeModule } from '@nationallibraryofnorway/ngx-mime';
import 'hammerjs';

import { CustomHttp } from './custom-http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';

export function httpClientFactory(handler: HttpHandler) {
  return new CustomHttp(handler);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
