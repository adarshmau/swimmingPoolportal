import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyprofileService } from './myprofile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {

  appUser : any ;

  user : FormGroup ;
  status : boolean = false ;
  message : string = "" ;

  constructor(private service : MyprofileService, private formBuilder : FormBuilder)
  {
      this.user = formBuilder.group({
                                        id : new FormControl() ,
                                        firstName : new FormControl('',Validators.required),
                                        lastName : new FormControl('',Validators.required),
                                        mobileNumber : new FormControl('',Validators.required),
                                        email : new FormControl('',Validators.required),
                                        role : new FormControl('',Validators.required),
                                        password : new FormControl(),
                                        activationCode : new FormControl(),
                                        status : new FormControl()    
                                    });
  }

  ngOnInit()
  {
    var email  = sessionStorage.getItem('username'); 
    this.service.toRead(email).subscribe( r1 => {
                                                    this.appUser = r1 ;
                                                    this.user.patchValue(this.appUser) ;
                                                });
  }
  
  get firstName()
  {
    return this.user.get('firstName');
  }

  get lastName()
  {
    return this.user.get('lastName');
  }

  get mobileNumber()
  {
    return this.user.get('mobileNumber');
  }

  get email()
  {
    return this.user.get('email');
  }

  get role()
  {
    return this.user.get('role');
  }

  save()
  {
    console.log(this.user);
    this.service.toSave(this.user).subscribe(r1=>{  
                                                    this.status = true ;
                                                    this.message = "Updated SuccessFully" ;
                                                    this.appUser = r1 ;               
                                                 });
  }

  resetStatus()
  {
    this.status = false ;
    this.message = "";
  }

}
