import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  clientes: any[] = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public clientesProvider: ClientesProvider,
              public authService: AuthServiceProvider) {
    this.getBaseClientes()
  }
  // ionViewCanEnter() {
  //   if(this.authService.authenticated() == true){
  //     return true
  //   } 
  //  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }

  openPage(cliente){
    this.navCtrl.push('EditaClientesPage', {clientes : cliente})
  }

  getBaseClientes() {
    this.clientesProvider.getBaseClientes()
      .subscribe((data) => {
        this.clientes = data.DataSet.Table
      })
  }

}
