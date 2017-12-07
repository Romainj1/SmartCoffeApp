import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionUserPage } from './gestion-user';

@NgModule({
  declarations: [
    GestionUserPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionUserPage),
  ],
})
export class GestionUserPageModule {}
