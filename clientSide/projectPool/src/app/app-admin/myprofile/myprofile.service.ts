import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  url : string = "http://localhost:9090/admin/myprofile" ;
  
  constructor(private httpClient : HttpClient) { }

  toRead(email : any)
  {
    return this.httpClient.get<any>(this.url+'/read/'+email)  ;  
  }

  toSave(user : any)
  {
    return this.httpClient.post<any>(this.url+'/save', user.value);
  }

}
