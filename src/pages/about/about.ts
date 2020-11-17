import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailscontactPage } from '../detailscontact/detailscontact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
		
	private _dataCards: any;
  private _detailscontact: any;

  constructor(public navCtrl: NavController) {
    this._detailscontact = DetailscontactPage;

  	this._dataCards = [
  		{title: "Enjoying a Coffee", video: "vid1.mp4", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "Sharing Moments", 	 video: "vid2.mp4", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "Happiness", 		     video: "vid3.mp4", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "CoFFee",  		 	     video: "vid4.mp4", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  	];

  }
    loadDetails( currentInfo ){
  // alert( currentInfo.title );
  this.navCtrl.push( this._detailscontact, { details: currentInfo } );
  }

}
