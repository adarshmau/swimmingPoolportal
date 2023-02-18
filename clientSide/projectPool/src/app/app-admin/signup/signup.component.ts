import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms' ;
import { SignupService } from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signup : FormGroup ;
  status : boolean = false ;

  constructor(private service : SignupService , private formBuilder : FormBuilder)
  {
    this.signup = formBuilder.group({
                                        firstName : new FormControl('',Validators.required),
                                        lastName : new FormControl('',Validators.required),
                                        mobileNumber : new FormControl('',Validators.required),
                                        email : new FormControl('',Validators.required),
                                        password : new FormControl('',Validators.required),
                                        role : new FormControl('',Validators.required)
                                    });
  }

  get firstName()
  {
    return this.signup.get('firstName');
  }

  get lastName()
  {
    return this.signup.get('lastName');
  }
  
  get mobileNumber()
  {
    return this.signup.get('mobileNumber');
  }

  get email()
  {
    return this.signup.get('email');
  }

  get password()
  {
    return this.signup.get('password') ;
  }

  get role()
  {
    return this.signup.get('role');
  }

  save()
  {
    if(this.signup.invalid)
    {
      this.signup.markAllAsTouched();
      return ;
    }
    this.service.doSignup(this.signup).subscribe(r1=>{
                                                      console.log(r1);
                                                      this.status = true ;
                                                    });
  }
}
