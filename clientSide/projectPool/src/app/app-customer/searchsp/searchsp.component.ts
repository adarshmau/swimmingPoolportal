import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchspService } from './searchsp.service';

@Component({
  selector: 'app-searchsp',
  templateUrl: './searchsp.component.html',
  styleUrls: ['./searchsp.component.css']
})
export class SearchspComponent {

  searchForm : FormGroup;

  searchList : any;

  message : string = '';

  status : boolean = false;

  constructor(private service : SearchspService, private fromBuilder : FormBuilder)
  {
    this.searchForm = fromBuilder.group({
      name : new FormControl('', Validators.required)
    });
  }

  get name()
  {
    return this.searchForm.get('name');
  }
  save()
  {
    var name = this.searchForm.value.name ;
    this.service.doSearchBasic(name).subscribe(
      r1 =>{
        console.log(r1);
        this.searchList = r1.pools;
        this.message = r1.message;
        this.status = r1.status;
      }
    );
  }
}
