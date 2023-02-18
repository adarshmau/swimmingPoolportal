import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : FormGroup ;

  constructor(private formBuilder : FormBuilder)
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
}
