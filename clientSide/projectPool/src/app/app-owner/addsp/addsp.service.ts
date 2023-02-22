import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddspService {

  url : string = 'http://localhost:9090' ;

  constructor(private httpClient : HttpClient) { }

  addSp(swimmingPool : any)
  {
    return this.httpClient.post<any>(this.url + '/swimmingPool/save',swimmingPool.value);
  }
}
