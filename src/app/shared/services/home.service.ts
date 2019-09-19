import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // tslint:disable-next-line: variable-name
  private api_key = 'AytFla37ceqUfpdNgzH6szGYmiLeLWbGEh0n54Te';
  private api = environment.url + this.api_key;

  constructor(private http: HttpClient) { }

  get(query: string) {
    const url = this.api + query;
    return this.http.get(url);
  }
}
