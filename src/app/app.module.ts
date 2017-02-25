import { NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler, NavController} from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage} from "../pages/login/login";
import {Login} from "../providers/login";
import {UploadPage} from "../pages/upload/upload";
import {RegisterPage} from "../pages/register/register";
import {Media} from "../providers/media";
import {Favourite} from "../providers/favorite";
import {PlayerPage} from "../pages/player/player";
import {Thumbnail} from "../pipes/thumbnail";


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    UploadPage,
    RegisterPage,
    PlayerPage,
    Thumbnail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    UploadPage,
    RegisterPage,
    PlayerPage
  ],
  providers: [Login, Media, Favourite, Thumbnail,{provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
