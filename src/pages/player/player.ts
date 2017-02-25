import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Media} from "../../providers/media";
import {Favourite} from "../../providers/favorite";
import {Login} from "../../providers/login";

/*
  Generated class for the Player page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }
  private id: number;
  private clickedMedia: any = {};
  private favouriteList: any = [];

  private hasLiked: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public param: NavParams,
    private mediaService: Media,
    private favouriteService: Favourite,
    private authService: Login) {
    this.id = this.param.get("id");
  }

  ionViewWillEnter() {

    this.mediaService.getMediaByID(this.id)
      .subscribe(
        res => {
          this.clickedMedia = res;
          this.mediaService.getUserByID(this.clickedMedia.user_id)
            .subscribe(
              resp => {
                this.clickedMedia.username = resp.username;
              });
          console.log(this.clickedMedia);
        });

    this.favouriteService.getFavouriteByFile(this.id)
      .subscribe(
        res => {
          this.favouriteList = res;
          console.log(this.favouriteList);
          for (let favourite of this.favouriteList) {
            if (this.authService.getUser().user_id === favourite.user_id) {
              this.hasLiked = true;
            }
          }
        });
  }

  setlike = () => {
    if (!this.hasLiked) {
      let param: any = {};
      param.file_id = +this.id;
      this.favouriteService.createFavorite(param)
        .subscribe(res => {
          this.hasLiked = !this.hasLiked;
        });
    } else {
      this.favouriteService.deleteFavorite(this.id)
        .subscribe(res => {
          this.hasLiked = !this.hasLiked;
        });
    }
  }
}
