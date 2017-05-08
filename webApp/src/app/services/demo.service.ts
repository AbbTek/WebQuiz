import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class DemoService {
  private apiUrl = environment.API_BASE_URL + '/api/v1/demo/';

  constructor(private http: Http) { }

  getTime(): Observable<any> {
    const url = `${this.apiUrl}time`;
    return this.http.get(url, null)
      .map(response => response.json() );
  }
}
