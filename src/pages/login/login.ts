import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup
  username: AbstractControl
  password: AbstractControl
  user: string
  pass: string
  company: string = ''
  companies: any
  companyModel: any

  @ViewChild(Slides) slider: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public loginProvider: LoginProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {

    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required,
      Validators.pattern('[a-zA-Z]*'),
      Validators.minLength(4),
      Validators.maxLength(30)])),
      password: new FormControl('', Validators.compose([Validators.required]))
    })

    this.username = this.loginForm.controls['username']
    this.password = this.loginForm.controls['password']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

  login() {
    var loader = this.loadingCtrl.create({
      content: 'A fazer login..',
      duration: 2000
    });

    if (this.loginForm.valid) {
      this.loginProvider.login(this.user, this.pass, this.company)

      loader.present().then(() => {
        this.loginProvider.getCompany()
          .subscribe(data => {
            this.companies = data
          })
      })
      loader.dismiss()

      let toast = this.toastCtrl.create({
        message: "Login feito com sucesso",
        duration: 1000,
        position: 'top',
        dismissOnPageChange: true
      })
      toast.present()

      this.slider.slideTo(1, 500);

    } else {
      let toast = this.toastCtrl.create({
        message: "Login inválido",
        duration: 1000,
        position: 'top'
      })
      toast.present()
    }
  }


  loginApp() {
    this.loginProvider.login(this.user, this.pass, this.companyModel)
    alert("o login e :" + this.user + this.pass + this.companyModel)
    this.nextPage()
  }

  nextPage() {
    this.navCtrl.setRoot('MenuPage')
  }

}
