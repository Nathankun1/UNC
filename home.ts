import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NavParams } from 'ionic-angular/navigation/nav-params';
import { IntrobusPage } from '../introbus/introbus';
import { PassengerListPage } from '../passenger-list/passenger-list';

@Component({  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  splash = true;
  nextPage = IntrobusPage;
  PassengerList = PassengerListPage;

  constructor(public navCtrl: NavController, public navparams: NavParams) {

  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }
}
