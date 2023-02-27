import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListallbookingService {

  url : string = 'http://localhost:9090';

  constructor(private httpClient : HttpClient)
  {}

  doLoad(email : string)
  {
    return this.httpClient.get<any>(this.url + '/booking/load/' + email);
  }

  doDelete(id : any)
  {
    return this.httpClient.delete<any>(this.url + '/booking/delete/' + id);
  }
}
