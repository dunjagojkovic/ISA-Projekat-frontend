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

      const expectedRole = route.data.expectedRole
       const token = this.getToken()
       const decodedToken = this.jwtHelper.decodeToken(token);
      if (
        !this.api.getAuthoHeader() || 
        decodedToken.role !== expectedRole
      ) {
        this.router.navigate(['/']);
        return false;
      } 
      return true;
    }

    getToken():string{
      const token = localStorage.getItem("token")
      if(token){return token}
      else{return ""}
  }



}

  

