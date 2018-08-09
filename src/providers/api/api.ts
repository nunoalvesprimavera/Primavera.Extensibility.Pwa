import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Platform } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  public apiUrl = '/api/'
  constructor(public http: Http,
              private platfom: Platform) {
    console.log('Hello ApiProvider Provider');

    if (this.platfom.is("cordova")) {
      this.apiUrl = "http://localhost/Primavera.WebAPI/"
    }
  }


  setPostHeaders() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return options
  }

  setGetHeaders() {
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });
    return options
  }


}