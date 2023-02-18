import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetpasswordService } from './resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

  status : boolean = false ;
  message : String = '';
  resetPassword : FormGroup;

  constructor(private service : ResetpasswordService, private formBuilder:FormBuilder, private activatedRoute: ActivatedRoute)  
  {
    var email = activatedRoute.snapshot.paramMap.get('email');
    var activationCode = activatedRoute.snapshot.paramMap.get('activationCode');

    this.resetPassword = this.formBuilder.group({
                                                      email : new FormControl(email),
                                                      activationCode : new FormControl(activationCode),
                                                      password : new FormControl('',Validators.required)
                                                });
  }

  get password()
  {
    return this.resetPassword.get('password');
  }
  
  save()
  {
    this.service.doReset(this.resetPassword).subscribe( r1 => {
                                                                  this.status = r1.status ;
                                                                  this.message = r1.message ;
                                                              });
  }

}
