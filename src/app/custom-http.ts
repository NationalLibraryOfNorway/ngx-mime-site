import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomHttp extends HttpClient {

  constructor(handler: HttpHandler) {
    super(handler);
  }

  get(url: string, options: any): Observable<any> {
    return super.get(url, options)
      .retry(2)
      .delay(100);
  }

}
