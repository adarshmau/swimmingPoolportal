import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MybookingsService {

  url : string = 'http://localhost:9090';

  constructor(private httpClient : HttpClient) { }

  doLoadCustBooking(email : string)
  {
    return this.httpClient.get<any>(this.url + '/booking/loadCustBooking/' + email);
  }

  doUpdate(updatePayLoad : any)
  {
    return this.httpClient.post<any>(this.url + '/booking/update', updatePayLoad.value);
  }

  findBooking(id : any)
  {
    return this.httpClient.get<any>(this.url + '/booking/findBooking/' + id);
  }
}
