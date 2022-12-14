import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): any {
    let loggedAdmin: any;
    loggedAdmin = localStorage.getItem('isAdmin');

    if(loggedAdmin != null && loggedAdmin == "true"){
      if(url == "/log-in")
        this.router.parseUrl('/users-list');
      else
        return true;
    } else {
      return this.router.parseUrl('/log-in');
    }
  }
}
