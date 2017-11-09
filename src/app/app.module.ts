import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
  import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectionCafeePage } from '../pages/selection-cafee/selection-cafee';
import { GestionUserPage } from '../pages/gestion-user/gestion-user';
import { ApiConnectionProvider } from '../providers/api-connection/api-connection';
import { CreateUserPopoverPage } from '../pages/gestion-user/gestion-user';
import { ShowUserPopoverPage } from '../pages/gestion-user/gestion-user';
import { UrlSettingsPage } from '../pages/url-settings/url-settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectionCafeePage,
    GestionUserPage,
    CreateUserPopoverPage,
    ShowUserPopoverPage,
    UrlSettingsPage
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
    CreateUserPopoverPage,
    ShowUserPopoverPage,
    UrlSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiConnectionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
