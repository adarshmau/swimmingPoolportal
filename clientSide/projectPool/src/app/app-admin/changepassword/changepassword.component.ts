import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangepasswordService } from './changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  changePassword : FormGroup ;
  message : string = "" ;
  status : boolean = false;

  constructor(private service :ChangepasswordService,private formBuilder : FormBuilder)
  {
    this.changePassword = formBuilder.group({
                                               email : new FormControl(),
                                               oldPassword : new FormControl('',Validators.required),
                                               newPassword : new FormControl('',Validators.required)   
                                            }) ;
  }


  get oldPassword()
  {
    return this.changePassword.get('oldPassword');
  }

  get newPassword()
  {
    return this.changePassword.get('newPassword');
  }

  reset()
  {
    this.changePassword.value.email = sessionStorage.getItem('username'); 

    if(this.changePassword.invalid)
    {
      this.changePassword.markAllAsTouched();
      return  ;
    }

    this.service.changePassword(this.changePassword).subscribe(r1 => 
                                                                    {
                                                                      this.status = r1.status ;
                                                                      this.message = r1.message ;
                                                                    });
    

  }

}
