import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { Reminder } from './../reminder/reminder';
import { Dictionary } from './../dictionary/dictionary';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  
  revisionPage = Reminder;
  dictionaryPage = Dictionary;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
