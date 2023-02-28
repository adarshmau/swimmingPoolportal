import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreLoginGuardService implements CanActivate{

  constructor(private router1 : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var username = sessionStorage.getItem('username');
    if(username == null)
    {
      this.router1.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
