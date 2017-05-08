import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  private apiUrl = environment.API_BASE_URL + '/api/v1/profile/';

  constructor(private http: Http) { }

  get(): Observable<any> {
    const url = `${this.apiUrl}current`;
    return this.http.get(url, null)
      .map(response => response.json());
  }
}
