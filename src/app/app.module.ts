import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsModule } from './../pages/tabs/tabs.module';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    TabsModule,
    IonicModule.forRoot(MyApp)
  ],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
