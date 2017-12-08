import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiConnectionProvider } from '../../providers/api-connection/api-connection';

@IonicPage()
@Component({
  selector: 'page-selection-cafee',
  templateUrl: 'selection-cafee.html',
})
export class SelectionCafeePage {
  intensite: number = 0 ;
  volume: number = 0 ;
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams, public apiConnectionProvider: ApiConnectionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionCaffeePage');
  }

  makeCoffe(){
    this.apiConnectionProvider.get("/coffee").then((res)=>{
      let toast = this.toastCtrl.create({
        message: "CAFE EN COURS (200)",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

    },(err)=>{
      let toast = this.toastCtrl.create({
        message: "error :"+err.status,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
;
  }
}
