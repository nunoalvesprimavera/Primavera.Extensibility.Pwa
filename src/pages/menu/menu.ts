import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Nav, AlertController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'ArtigosPage';
  activePage: any;
  username = localStorage.getItem('user')

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private alertCtrl: AlertController,
              private app: App,
              private authService: AuthServiceProvider) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Artigos', component: 'ArtigosPage' },
      { title: 'Clientes', component: 'ClientesPage' }
    ];

    this.activePage = this.pages[0]

  }

  // ionViewCanEnter(): boolean {
  //   if(this.authService.authenticated()) {
  //     return true; // You are allowed to enter
  //   }   
  //   return false;
  // }

  ionViewDidLoad() {
    // console.log(this.authService.authenticated())
    console.log('ionViewDidLoad MenuPage')
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component)
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Tem a certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.authService.logout();
            console.log(this.activePage.logout());
            let nav = this.app.getRootNav();
            nav.setRoot(LoginPage);
          }
        }
      ]
    })
    alert.present();
  }
}
