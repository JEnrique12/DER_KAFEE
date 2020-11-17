import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailshomePage } from '../detailshome/detailshome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private _dataCards: any;
	private _detailshome: any;

  constructor(public navCtrl: NavController) {
  	this._detailshome = DetailshomePage;

  	this._dataCards = [
  		{title: "Enjoying a Coffee", image: "img1.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "Sharing Moments", 	 image: "img2.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "Happiness", 		     image: "img3.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "CoFFee", 		 	     image: "img4.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  		{title: "Delicious", 		     image: "img5.png", descripcion: "Quien Bebe Café en sus Labios Fragmentos de Eternidad"},
  	];
}

	loadDetails( currentInfo ){
	// alert( currentInfo.title );
	this.navCtrl.push( this._detailshome, { details: currentInfo } );
	}

}
