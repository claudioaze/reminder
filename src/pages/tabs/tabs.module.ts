import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Tabs } from './tabs';
import { DictionaryModule } from './../dictionary/dictionary.module';
import { ReminderModule } from './../reminder/reminder.module';

@NgModule({
  declarations: [
    Tabs
  ],
  imports: [
    IonicPageModule.forChild(Tabs),
    ReminderModule,
    DictionaryModule
  ],
  exports: [
    Tabs
  ]
})
export class TabsModule {}
