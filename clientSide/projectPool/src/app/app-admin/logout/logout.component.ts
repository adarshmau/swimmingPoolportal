import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  ngOnInit()
  {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }
}
