import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

const url = 'http://127.0.0.1:3000';

@Injectable()
export class GetAllStatesService {

  result: any;

  constructor(private http: Http) { }

  GetAllStates() {
    return this.http.get(url + '/states').map(result => this.result = result.json());
  }

}
