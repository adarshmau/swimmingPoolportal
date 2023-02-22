import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddspService } from './addsp.service';

@Component({
  selector: 'app-addsp',
  templateUrl: './addsp.component.html',
  styleUrls: ['./addsp.component.css']
})
export class AddspComponent {
  
  swimmingPool : FormGroup ;
  status : boolean = false ;
  message : string = "";


  constructor(private service : AddspService, private formBuilder : FormBuilder)
  {
    this.swimmingPool = formBuilder.group({
                                                username : new FormControl() ,
                                                title : new FormControl('', Validators.required) ,
                                                plotNo : new FormControl('', Validators.required) ,
                                                streetName : new FormControl('', Validators.required) ,
                                                areaName : new FormControl('', Validators.required),
                                                city : new FormControl('', Validators.required),
                                                state : new FormControl('', Validators.required),
                                                country : new FormControl('', Validators.required),
                                                pinCode : new FormControl('', Validators.required)
                                          });
  }

  save()
  {
    if(this.swimmingPool.invalid)
    {
      this.swimmingPool.markAllAsTouched();
      return ;
    }
    this.swimmingPool.value.username = sessionStorage.getItem('username');
    console.log(this.swimmingPool.value.username);
    this.service.addSp(this.swimmingPool).subscribe( r1 => { 
                                                                this.status = true ;
                                                                this.message = "Swimming Pool data saved Successfully" ;
                                                            }) ;
  }
  get title()
  {
    return this.swimmingPool.get('title');
  }

  get plotNo()
  {
    return this.swimmingPool.get('plotNo');
  }

  get streetName()
  {
    return this.swimmingPool.get('streetName');
  }

  get areaName()
  {
    return this.swimmingPool.get('areaName');
  }

  get city()
  {
    return this.swimmingPool.get('city');
  }

  get state()
  {
    return this.swimmingPool.get('state');
  }

  get country()
  {
    return this.swimmingPool.get('country');
  }
  get pinCode()
  {
    return this.swimmingPool.get('pinCode');
  }
}
