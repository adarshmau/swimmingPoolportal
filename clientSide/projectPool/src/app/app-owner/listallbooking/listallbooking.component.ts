import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListallbookingService } from './listallbooking.service';

@Component({
  selector: 'app-listallbooking',
  templateUrl: './listallbooking.component.html',
  styleUrls: ['./listallbooking.component.css']
})
export class ListallbookingComponent {

  bookLoad : any;

  constructor(private service : ListallbookingService)
  {}

  email : string = "" + sessionStorage.getItem('username');

  ngOnInit()
  {
    this.load();
  }

  pageLoader()
  {
    this.load();
  }

  load()
  {
    this.service.doLoad(this.email).subscribe(r1 =>{
      this.bookLoad = r1;
      this.deletedMessage = '';
    });
  }

  deletedMessage : string = '';

  delete(id : any)
  {
    this.service.doDelete(id).subscribe(r1=>{
      this.deletedMessage = "Booking deleted successfully";
    });
    this.load();
  }
}
