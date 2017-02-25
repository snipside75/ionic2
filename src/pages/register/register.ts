import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Login} from "../../providers/login";

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = {email: '', password: ''};


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  constructor(private nav: NavController, private auth: Login, private alertCtrl: AlertController, public navParams: NavParams) {}



}
