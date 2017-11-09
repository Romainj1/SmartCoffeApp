import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectionCafeePage } from '../selection-cafee/selection-cafee';
import { GestionUserPage } from '../gestion-user/gestion-user';
import { UrlSettingsPage } from '../url-settings/url-settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
  }



  goSelectionCaffe(){
    this.navCtrl.push(SelectionCafeePage);
  }

  goGestionUser(){
    this.navCtrl.push(GestionUserPage);
  }

  goUrlSettings(){
    this.navCtrl.push(UrlSettingsPage);
  }

}
