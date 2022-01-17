import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  roleAs: any;

  constructor(
    public auth: AuthService,
    public router: Router,
    public jwtHelper: JwtHelperService,
    public api: ApiService
    ) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {

      if(route.data.role != this.getRole()) {
        this.router.navigate(['/']);
        return false;
      }

      return true;
    }

  getRole() {

    let userStrng = localStorage.getItem('user');
    this.roleAs = '';

    if(userStrng) {
      let user = JSON.parse(userStrng);
      this.roleAs = user.role;
      return user.role;
    }

    this.roleAs = ''
    return this.roleAs;
  }

}

  

