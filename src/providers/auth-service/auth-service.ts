import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private isLoggedIn = false;
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  // Login a user
  login() : void {
    this.isLoggedIn = true;
  }
 
  // Logout a user, destroy token and remove
  // every information related to a user
  logout() : void{
    this.isLoggedIn = false;
  }
 
  // Returns whether the user is currently authenticated
  // Could check if current token is still valid
  authenticated() : boolean {
    return this.isLoggedIn;
    // let token_expire = localStorage.getItem('token_expire')
    // if(token_expire == '0'){

    // }
  }

}

