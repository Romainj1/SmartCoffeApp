import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectionCafeePage } from '../pages/selection-cafee/selection-cafee';
import { GestionUserPage } from '../pages/gestion-user/gestion-user';
import { GestionUrlPage } from '../pages/gestion-url/gestion-url';
import { ApiConnectionProvider } from '../providers/api-connection/api-connection';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectionCafeePage,
    GestionUserPage,
    GestionUrlPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectionCafeePage,
    GestionUserPage,
    GestionUrlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiConnectionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiConnectionProvider,
    NativePageTransitions,
    HTTP,
  ]
})
export class AppModule {}
