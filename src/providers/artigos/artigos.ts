import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

/*
  Generated class for the ArtigosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArtigosProvider {

  constructor(public http: Http,
              public apiProvider: ApiProvider) {
    console.log('Hello ArtigosProvider Provider');
  }

  getBaseArtigos() {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/LstArtigos', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        alert("failed to get Base/Artigos ")
        console.log("ERROR!: ", err);
      })
  }


  getEditaArtigos() {
    let numArtigo = localStorage.getItem('numArtigo')
    return this.http.get(this.apiProvider.apiUrl + 'Base/Artigos/Edita/' + numArtigo, this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        alert("failed to get Base/Artigos ")
        console.log("ERROR!: ", err);
      }
      )
  }

}