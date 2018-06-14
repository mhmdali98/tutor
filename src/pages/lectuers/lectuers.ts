import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LectuerPage } from '../lectuer/lectuer';


@IonicPage()
@Component({
  selector: 'page-lectuers',
  templateUrl: 'lectuers.html',
})
export class LectuersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LectuersPage');
  }
  goToLec(){
    this.navCtrl.push(LectuerPage)
  }

}
