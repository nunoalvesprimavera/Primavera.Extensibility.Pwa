import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ArtigosProvider } from '../../providers/artigos/artigos';

/**
 * Generated class for the EditaArtigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-artigos',
  templateUrl: 'edita-artigos.html',
})
export class EditaArtigosPage {
  artigos: any[] = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public artigosProvider: ArtigosProvider,
              public viewCtrl: ViewController) {
    this.getNumArtigo()
    this.editaArtigos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaArtigosPage');
  }

  editaArtigos() {
    this.artigosProvider.getEditaArtigos().subscribe(data => {
      this.artigos = Array.of(data)
    })
  }

  getNumArtigo() {
    let artigo = this.navParams.get('artigos')
    localStorage.setItem('numArtigo', artigo)
  }

  atualizaArtigo() {

  }

  closePage() {
    this.viewCtrl.dismiss()
  }


}
