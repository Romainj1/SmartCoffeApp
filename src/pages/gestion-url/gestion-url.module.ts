import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionUrlPage } from './gestion-url';

@NgModule({
  declarations: [
    GestionUrlPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionUrlPage),
  ],
})
export class GestionUrlPageModule {}
