import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';

const routes: Routes = [{path:"",component:LoginComponent},{path:"student",component:StudentHomeComponent},{
  path:"moderator",component:ModeratorHomeComponent
},{path:"admin",component:AdminHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
