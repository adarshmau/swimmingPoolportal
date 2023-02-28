import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MybookingsService } from './mybookings.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent {

  loadCust : any; // loading of all the bookings

  editBooking : FormGroup; //editing of any bookings

  status : boolean = false;

  message : string = '';

  refreshMessage : string = 'Please click refresh to load Bookings';

  constructor(private service : MybookingsService, private fromBuilder : FormBuilder)
  {
    this.editBooking = fromBuilder.group({
      email : new FormControl(),
      date : new FormControl(),
      time : new FormControl(),
      quantity : new FormControl(),
      poolId : new FormControl(),
      id : new FormControl()
    });
  }

  refresh()
  {
    this.loadCustBooking();
  }
  loadCustBooking()
  {
    this.refreshMessage = '';
    var email : string = '' + sessionStorage.getItem('username');
    this.service.doLoadCustBooking(email).subscribe(r1 =>
      {
        console.log(r1);
        this.loadCust = r1;
      });
  }

  poolId : any;

  bookingId : any;
  
  edit(bookingId : any, poolId : any)
  {
    this.poolId = poolId;
    this.bookingId = bookingId;
    this.status = true;
    this.service.findBooking(bookingId).subscribe(r1 =>
      {
        this.editBooking.patchValue(r1);
      });
  }

  save()
  {
    this.status = false;
    this.message = "Booking deleted successfully";
    this.editBooking.value.email = sessionStorage.getItem('username');
    this.editBooking.value.poolId = this.poolId ; 
    this.editBooking.value.id = this.bookingId;
    console.log(this.editBooking.value.poolId);
    console.log(this.editBooking.value.id);
    if((this.editBooking.value.time + "").length <= 5)
    {
      this.editBooking.value.time = this.editBooking.value.time + ":00" ;
    }
    this.service.doUpdate(this.editBooking).subscribe(r1 =>{
      console.log(r1);
      this.message = "Booking Changed Successfully. Please reload the Page or click Refresh button above to refresh the Booking List";
    });
  }

  get time()
  {
    return this.editBooking.get('time');
  }
  get date()
  {
    return this.editBooking.get('date');
  }
  get quantity()
  {
    return this.editBooking.get('quantity');
  }
}
