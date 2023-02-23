import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ListspService } from './listsp.service';

@Component({
  selector: 'app-listsp',
  templateUrl: './listsp.component.html',
  styleUrls: ['./listsp.component.css']
})
export class ListspComponent {

  swimmingPools : any ;

  editPool : any ;
  message : string = "";
  status : boolean = false ;

  constructor(private service : ListspService, private formBuilder : FormBuilder)
  {
          this.editPool = formBuilder.group({
                                              id : new FormControl(),
                                              username : new FormControl() ,
                                              title : new FormControl() ,
                                              plotNo : new FormControl() ,
                                              streetName : new FormControl() ,
                                              areaName : new FormControl(),
                                              city : new FormControl(),
                                              state : new FormControl(),
                                              country : new FormControl(),
                                              pinCode : new FormControl()
                                        });

  }

  ngOnInit()
  {
    var email = sessionStorage.getItem('username');

    this.service.list(email).subscribe( r1 => { this.swimmingPools = r1});
  }

  edit(id : any)
  {
    this.status = true ;
    this.service.findPool(id).subscribe(r1 => { 
                                                this.editPool.patchValue(r1) ;
                                              });
  }

  save()
  {
    this.service.save(this.editPool).subscribe(r1=>{
                                                        console.log(r1);
                                                        this.message = "Changes saved Succesfully" ;
                                                    });
  }

}
