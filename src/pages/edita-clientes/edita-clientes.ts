import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

/**
 * Generated class for the EditaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-clientes',
  templateUrl: 'edita-clientes.html',
})
export class EditaClientesPage {
  clientes: any[] = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public clientesProvider: ClientesProvider,
              public viewCtrl: ViewController) {
    this.getNumCliente()
    this.editaClientes()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaClientesPage');
  }

  editaClientes() {
    this.clientesProvider.getEditaClientes().subscribe(data => {
      this.clientes = Array.of(data)
    })
  }

  getNumCliente() {
    let cliente = this.navParams.get('clientes')
    localStorage.setItem('numCliente', cliente);
  }

  atualizaCliente() {

  }

  closePage() {
    this.viewCtrl.dismiss()
  }

}
