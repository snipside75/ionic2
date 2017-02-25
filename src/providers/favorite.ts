import { Login } from './login';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Favourite provider.
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Favourite {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token: string = '';

  constructor(public http: Http, private authService: Login) {}

  getFavouriteByFile = (id: number) => {
    return this.http.get(this.url + '/favourites/file/' + id)
      .map(
        res =>
          res.json()
      );
  }

  createFavorite = (id: any) => {
    this.token = this.authService.getUser().token;
    return this.http.post(this.url + '/favourites?token=' + this.token, id)
      .map(
        res => {
          res.json();
        });
  }

  deleteFavorite = (id: any) => {
    this.token = this.authService.getUser().token;
    return this.http.delete(this.url + '/favourites/file/' + id + '?token=' + this.token)
      .map(
        res => {
          res.json();
        });
  }


}
