import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectionCafeePage } from './selection-cafee';

@NgModule({
  declarations: [
    SelectionCafeePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectionCafeePage),
  ],
})
export class SelectionCafeePageModule {}
