import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesProvider {

  constructor(public http: Http,
              public apiProvider: ApiProvider) {
    console.log('Hello ClientesProvider Provider');
  }

  getBaseClientes() {
    return this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/LstClientes', this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        alert("failed to get Base/Clientes ")
        console.log("ERROR!: ", err);
      })
  }

  getEditaClientes() {
    let numCliente = localStorage.getItem('numCliente')
    return this.http.get(this.apiProvider.apiUrl + 'Base/Clientes/Edita/' + numCliente, this.apiProvider.setGetHeaders())
      .map(res => {
        return res.json()
      }, err => {
        alert("failed to get Base/Clientes/Edita ")
        console.log("ERROR!: ", err);
      })
  }

}
