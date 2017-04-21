import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DictionaryLanguage } from './dictionary-language';

@NgModule({
  declarations: [
    DictionaryLanguage,
  ],
  imports: [
    IonicPageModule.forChild(DictionaryLanguage),
  ],
  exports: [
    DictionaryLanguage
  ]
})
export class DictionaryLanguageModule {}
