import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  url :string  = 'http://localhost:9090/admin/forgotPassword';
  
  constructor(private httpClient: HttpClient) { }

  forgotPass(email : any)
  {
    return this.httpClient.post<any>(this.url,email.value) ; 
  }

}
