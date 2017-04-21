import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dictionary } from './dictionary';

@NgModule({
  declarations: [
    Dictionary,
  ],
  imports: [
    IonicPageModule.forChild(Dictionary),
  ],
  exports: [
    Dictionary
  ]
})
export class DictionaryModule {}
