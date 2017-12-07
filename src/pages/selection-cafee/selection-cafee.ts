import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectionCafeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection-cafee',
  templateUrl: 'selection-cafee.html',
})
export class SelectionCafeePage {
  intensite: number = 0 ;
  volume: number = 0 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionCafeePage');
  }

  makeCoffe(){
    
  }
}
