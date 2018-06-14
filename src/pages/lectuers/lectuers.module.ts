import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LectuersPage } from './lectuers';

@NgModule({
  declarations: [
    LectuersPage,
  ],
  imports: [
    IonicPageModule.forChild(LectuersPage),
  ],
})
export class LectuersPageModule {}
