import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LectuersPage } from '../lectuers/lectuers';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,) {

  }
  goToLec(){
    this.navCtrl.push(LectuersPage)
  }

}
