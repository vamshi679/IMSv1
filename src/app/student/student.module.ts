import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import {NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  declarations: [StudentdashboardComponent, StudentdetailsComponent, StudentprofileComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,NgxPaginationModule
  ]
})
export class StudentModule { }
