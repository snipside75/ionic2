import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {Media} from "../../providers/media";
import {Page1} from "../page1/page1";

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }
  private loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private uploadService: Media,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  upload = (event, value: any) => {
    this.showLoading("Uploading...");
    //console.log(evt.target.querySelector('input[type=file]'));
    const fileElement = event.target.querySelector('input[type=file]');
    const file = fileElement.files[0];

    const fd = new FormData();
    fd.append('file', file);
    fd.append('title', value.title);
    fd.append('description', value.description);

    this.uploadService.uploadMedia(fd)
      .subscribe(
        data => {
          if (data) {
            this.loader.dismiss();
            this.navCtrl.setRoot(Page1);
          }
        }, err => {
          this.loader.dismiss();
          console.log(err);

          let alert = this.alertCtrl.create({
            title: 'Upload Fail',
            subTitle: "Something went wrong!",
            buttons: ['OK']
          });
          alert.present(prompt);
        }
      );
  };

  showLoading = (message: string) => {
    this.loader = this.loadCtrl.create({
      content: message
    });
    this.loader.present();
  }
}
