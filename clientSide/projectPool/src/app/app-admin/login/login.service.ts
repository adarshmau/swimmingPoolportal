import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://localhost:9090/admin/login";

  
  constructor(private httpClient : HttpClient) { }

  doLogin(user:any)
  {
    return this.httpClient.post<any>(this.url,user.value) ;
  }

}
