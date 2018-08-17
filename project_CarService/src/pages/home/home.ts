import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, Button } from 'ionic-angular';
import firebase from 'firebase';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import {storage} from 'firebase'
import { Camera, CameraOptions } from '@ionic-native/camera';  
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var config = {
  apiKey: "AIzaSyBXrLn0juK47mZXqWWv5SP8EoHg_wMon_I",
  authDomain: "carservice001-ab84b.firebaseapp.com",
  databaseURL: "https://carservice001-ab84b.firebaseio.com",
  projectId: "carservice001-ab84b",
  storageBucket: "carservice001-ab84b.appspot.com",
  messagingSenderId: "220672897492"
};
firebase.initializeApp(config);
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  RegistrationNumber
  CarMaker
  color
  fireExtinguisher
  WheelCaps
  ToolBox
  SpareTier
  Comments
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private mediaCapture: MediaCapture, public platform: Platform, private f : File,private Camera: Camera, private CameraOptions:CameraOptions, private alertCtrl : AlertController) {

  }
  ngOnInit(){
    this.photos[''];
  }
   
  //  ionViewDidLoad() {
  //  {
 
  photos:any
  captureDataUrl: string;

  photo(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.Camera.DestinationType.DATA_URL,
      encodingType: this.Camera.EncodingType.JPEG,
      mediaType: this.Camera.MediaType.PICTURE
    };
    this.Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;

      this.photos.push(this.captureDataUrl);
      this.photos.reverse();
    }, (err) => {
      // Handle error
    });
   
  }

//   deletePhoto(index){
// this.photos.splice(index, 1)
// let confirm = this.alertCtrl.create({
//   title:'Are you sure you want to delete?',
//   message: ''
//   Buttons: [{
//     text: 'No',
//     Handle:
//     }
//   }]
// })


  // }
  Submit(){
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      // Do something here when the data is succesfully uploaded!
     });
       var database = firebase.database();
       // database.ref('/carService/').push(this.RegistrationNumber, this.CarMaker, this.fireExtinguisher, this.WheelCaps, this.ToolBox, this.SpareTier, this.Comments);
      database.ref('/carService/').push(this.CarMaker);
      }

  }
  
  