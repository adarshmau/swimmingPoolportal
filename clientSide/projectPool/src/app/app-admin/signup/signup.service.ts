import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url : string = "http://localhost:9090/appUser/signup";

  constructor(private httpClient : HttpClient) { }

  doSignup(signupForm:any)
  {
    return this.httpClient.post<any>(this.url,signupForm.value) ;
  }
}
