import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtigosProvider } from '../../providers/artigos/artigos';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ArtigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artigos',
  templateUrl: 'artigos.html',
})
export class ArtigosPage {
  artigos: any[] = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public artigosProvider: ArtigosProvider,
              public authService: AuthServiceProvider) {
    this.getBaseArtigos() 
  }
  ionViewCanEnter(): boolean {
    if(this.authService.authenticated()) {
      return true; // You are allowed to enter
    }   
    return false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtigosPage');
    this.getBaseArtigos()
  }

  openPage(artigo){
    this.navCtrl.push('EditaArtigosPage', {artigos : artigo})
  }

  getBaseArtigos() {
    this.artigosProvider.getBaseArtigos()
      .subscribe((data) => {
        this.artigos = data.DataSet.Table
      })
  }

}