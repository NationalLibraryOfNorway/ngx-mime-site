import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operators/retry';
import { delay } from 'rxjs/operators/delay';

@Injectable()
export class CustomHttp extends HttpClient {

  constructor(handler: HttpHandler) {
    super(handler);
  }

  get(url: string, options: any): Observable<any> {
    return super.get(url, options)
      .pipe(
        retry(2),
        delay(100)
      );
  }

}
