import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html',
})
export class Dictionary {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}
