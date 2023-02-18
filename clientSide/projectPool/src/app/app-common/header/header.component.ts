import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn()
  {
    var status = false ;
    var username = sessionStorage.getItem('username');
    if(username)
    {
        status = true ;
    }
    return status ;
  }

}
