import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthServiceProvider } from '../auth-service/auth-service';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  constructor(public http: Http,
              public apiProvider: ApiProvider,
              public authService: AuthServiceProvider) {
    console.log('Hello LoginProvider Provider');
  }

  //Request access token
  login(username, password, company) {
    let body = 'username=' + username + '&password=' + password + '&company=' + company + '&instance=DEFAULT&grant_type=password';

    this.http.post(this.apiProvider.apiUrl + 'token', body, this.apiProvider.setPostHeaders())
      .map(res => res.json()).subscribe(data => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('token_expire', data.expires_in);
        localStorage.setItem('user', username);
        this.authService.login();
        console.log("token : " + data.access_token);
        console.log("expries in : " + data.expires_in);
        console.log("valid : " + this.authService.login());
      }, err => {
        alert("failed")
        console.log("ERROR!: ", err);
      }
      )
  }

  getCompany() {
    return this.http.get(this.apiProvider.apiUrl + 'Administrador/ListaEmpresas', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        alert("failed to get Administrador/ListaEmpresas ")
        console.log("ERROR!: ", err);
      }
      )
  }

}
