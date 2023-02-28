import { Time } from '@angular/common';
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

  book : FormGroup;

  basicSearchFormStatus : boolean = false;
  basicTableshow : boolean = false;
  advanceTableshow : boolean = false;

  advancedSearch : FormGroup ;
  statusAdvanced : boolean = false ;
  messageAdvanced : string = "" ;
  advancedSearchResults : any ;
  advancedSearchFormStatus : boolean = false ;

  constructor(private service : SearchspService, private formBuilder : FormBuilder)
  {
    this.searchForm = formBuilder.group({
      name : new FormControl('', Validators.required)
    });
    this.advancedSearch = formBuilder.group({
      city : new FormControl(''),
      state : new FormControl(''),
      country : new FormControl('') 
  });
  this.book = formBuilder.group({
    email : new FormControl(),
    date : new FormControl(),
    time : new FormControl(),
    quantity : new FormControl() ,
    poolId : new FormControl()
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

  toShowTableAdSearch()
  {
    this.advancedSearchFormStatus = true ;
    this.basicSearchFormStatus = false;
    this.basicTableshow = false;
  }

  toShowTableBaSearch()
  {
    this.basicSearchFormStatus = true;
    this.advancedSearchFormStatus = false ;
    // this.advanceTableshow = false;
    this.statusAdvanced = false;
  }

  toShowBasicTable()
  {
    this.basicTableshow = true;
  }

  toShowAdvanceTable()
  {
    this.advanceTableshow = true;
  }
  searchAdvanced()
  { 
    console.log(this.advancedSearch);
    this.service.searchAdvanced(this.advancedSearch).subscribe(r1 => {
                                                                        this.advancedSearchResults = r1.pools ;
                                                                        this.statusAdvanced = r1.status ;
                                                                        this.messageAdvanced = r1.message ;
                                                                      });
  }

  bookingFormStatus : boolean = false ;
  bookingStatus : boolean = false ;
  bookingMessage : string = "" ;
  poolId:any ;

  bookClicked(id : any)
  {
    this.poolId = id;
    this.bookingFormStatus = true ;
  }

  // bookinStatus : boolean = false;

  bookSp()
  {
    this.book.value.email = sessionStorage.getItem('username');
    this.book.value.poolId = this.poolId ; 
    this.book.value.time = this.book.value.time + ':00';
    console.log(this.book.value);
    this.service.book(this.book).subscribe(r1 => { 
                                                    this.bookingFormStatus = false;
                                                    this.bookingMessage = "Booked Successfully";
                                                 });
  }
}
