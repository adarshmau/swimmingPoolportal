import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListallbookingService {

  url : string = 'http://localhost:9090/booking/';

  
}
