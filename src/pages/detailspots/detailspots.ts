import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detailspots',
  templateUrl: 'detailspots.html',
})
export class DetailspotsPage {
	private _currentDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this._currentDetails = navParams.data.details;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailspotsPage');
  }

}
