import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


const routes: Routes = [{path:'studentdashboard/:sID',component:StudentdashboardComponent,children:[{path:'studentprofile',component:StudentprofileComponent},{path:'studentdetails',component:StudentdetailsComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
