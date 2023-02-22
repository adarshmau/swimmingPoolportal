import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListspService {

  url : string = 'http://localhost:9090/swimmingPool';

  constructor(private httpClient : HttpClient) { }

  list()
  {
    return this.httpClient.get<any>(this.url+'/list') ;
  }

  findPool(id : any)
  {
    return this.httpClient.get<any>(this.url+'/findPool/'+id) ; 
  }

  save(pool : any)
  {
    return this.httpClient.post<any>(this.url+'/update', pool.value) ;
  }
}
