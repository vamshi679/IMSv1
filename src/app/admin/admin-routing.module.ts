import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BatchesComponent } from './batches/batches.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { FeeComponent } from './fee/fee.component';
import { MarksComponent } from './marks/marks.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';


const routes: Routes = [{path:'admindashboard',component:AdmindashboardComponent,children:[{path:'batchs',component:BatchesComponent},
  {path:'attendence',component:AttendenceComponent},{path:'fee',component:FeeComponent},{path:'marks',component:MarksComponent},
  {path:'register',component:RegistrationComponent},{path:'adminprofile',component:AdminprofileComponent} ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
