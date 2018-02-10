import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GestionUrlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-url',
  templateUrl: 'gestion-url.html',
})
export class GestionUrlPage {

  url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  	this.storage.get('url').then((data) => {
   	  if(data == null)
      {
        this.storage.set('url',this.url);
      }else{
     	this.url = data;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionUrlPage');
  }

  Enregistrer(){

  }

}
