import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : FormGroup ;
  status : boolean = false ;
  message : string ="" ;

  constructor(private formBuilder : FormBuilder, private service : LoginService)
  {
    this.login = formBuilder.group(
                                    {
                                      username : new FormControl('',Validators.required),
                                      password : new FormControl('',Validators.required)
                                    });
  }

  get username()
  {
    return this.login.get('username');
  }

  get password()
  {
    return this.login.get('password');
  }

  save()
  {
//    console.log(this.login);
      this.service.doLogin(this.login).subscribe( 
                                              r1 => {
                                                        this.message = r1.status ;
                                                        if(r1.status == "Login Success")
                                                        {
                                                          sessionStorage.setItem('role',r1.role) ;
                                                          sessionStorage.setItem('username',r1.username) ;
                                                          this.status = true ;
                                                        }                                                       
                                                    });
  }
}
