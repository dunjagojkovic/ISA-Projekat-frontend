import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;
    
      roleAs: any;
    
      constructor(public jwtHelper: JwtHelperService) {}     
    
      isLoggedIn() {
        const loggedIn = localStorage.getItem('STATE');
        if (loggedIn == 'true')
          this.isLogin = true;
        else
          this.isLogin = false;
        return this.isLogin;
      }
    
      getRole() {
        this.roleAs = localStorage.getItem('ROLE');
        return this.roleAs;
      }

      

    
}
