import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {storage} from 'firebase'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { database } from '../../node_modules/firebase';

// const firebaseConfig = {

//     apiKey: "AIzaSyBXrLn0juK47mZXqWWv5SP8EoHg_wMon_I",
//     authDomain: "carservice001-ab84b.firebaseapp.com",
//     databaseURL: "https://carservice001-ab84b.firebaseio.com",
//     projectId: "carservice001-ab84b",
//     storageBucket: "carservice001-ab84b.appspot.com",
//     messagingSenderId: "220672897492"

// };
@NgModule({
  declarations: [
    MyApp,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // Camera
  ]
})
export class AppModule {}
