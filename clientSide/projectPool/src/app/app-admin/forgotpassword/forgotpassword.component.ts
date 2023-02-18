import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from './forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  forgotPassword : FormGroup ;
  status : boolean = false ;
  message : string = "" ;

  constructor(private service : ForgotpasswordService, private formBuilder :FormBuilder)
  {
    this.forgotPassword = formBuilder.group({
                                                email : new FormControl('',Validators.required)
                                            });
  }

  get email()
  {
    return this.forgotPassword.get('email');
  }

  save()
  {
    this.service.forgotPass(this.forgotPassword).subscribe( r1 => { 
                                                                      this.status = r1.status ;
                                                                      this.message = r1.message ;
                                                                  });
  }

}
