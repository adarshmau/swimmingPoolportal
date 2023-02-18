import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  url : string = "http://localhost:9090/admin/changePassword" ; 

  constructor(private httpClient : HttpClient) { }

  changePassword(changePassword:any)
  {
    return this.httpClient.post<any>(this.url,changePassword.value) ;
  }

}
