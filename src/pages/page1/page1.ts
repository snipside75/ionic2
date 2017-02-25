import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UploadPage} from "../upload/upload";
import {LoginPage} from "../login/login";
import {Login} from "../../providers/login";
import {Media} from "../../providers/media";
import {PlayerPage} from "../player/player";
import { Thumbnail } from '../../pipes/thumbnail';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  private mediaList: any = [];

  constructor(public navCtrl: NavController, private media: Media, private auth: Login) { }

  ionViewWillEnter() {
    this.media.getMedia().subscribe(
      res => {
        this.mediaList = res;
        console.log(this.mediaList);
      }
    )
  };

  navToUpload = () => {
    this.navCtrl.push(UploadPage);
  }

  showMedia = (id: number) => {
    this.navCtrl.push(PlayerPage, { "id": id });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.auth.removeUser();
    this.auth.logged = false;
    this.navCtrl.setRoot(LoginPage);
  }
}
