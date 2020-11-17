import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailspotsPage } from '../detailspots/detailspots';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	private _dataCards: any;
  	private _detailspots: any;

  constructor(public navCtrl: NavController) {
  	this._detailspots = DetailspotsPage;

  	this._dataCards = [
  		{title: "Enjoying a Coffee", image: "img6_1.png", img_1:"img6.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "Sharing Moments", 	 image: "img-7_1.png", img_1:"img-7.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  	];

  }

  loadDetails( currentInfo ){
  // alert( currentInfo.title );
  this.navCtrl.push( this._detailspots, { details: currentInfo } );
  }

}
