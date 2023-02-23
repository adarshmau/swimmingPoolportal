import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchspService {

  url : string = 'http://localhost:9090/swimmingPool';

  constructor(private httpClient : HttpClient) { }

  doSearchBasic(name : any)
  {
    return this.httpClient.get<any>(this.url + '/findPoolByName/' + name);
  }
  
}
