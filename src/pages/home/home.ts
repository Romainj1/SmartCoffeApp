import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectionCafeePage } from '../selection-cafee/selection-cafee';
import { GestionUserPage } from '../gestion-user/gestion-user';
import { ApiConnectionProvider } from '../../providers/api-connection/api-connection';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private transitionsOptionsFade: NativeTransitionOptions = {
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
};

  constructor(private nativePageTransitions: NativePageTransitions, public apiConnectionProvider : ApiConnectionProvider ,public navCtrl: NavController) {
  }

  ionViewDidLoad(){
  }
  ionViewWillLeave() {
}

goSelectionCaffe(){
  console.log('goselection Caffe');
  //nav Options to make transitions effects
this.nativePageTransitions.fade(this.transitionsOptionsFade);
this.navCtrl.push(SelectionCafeePage);
}

goGestionUser(){
  let options: NativeTransitionOptions = {
    direction: 'down',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
};
this.nativePageTransitions.slide(options);
  this.navCtrl.push(GestionUserPage);
}

goUrlSettings(){

}

}
