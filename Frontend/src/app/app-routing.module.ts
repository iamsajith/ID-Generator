import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { ApplyComponent } from './student/apply/apply.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentComponent } from './student/student/student.component';

const routes: Routes = [{path:"",component:LoginComponent},{path:"newpassword",component:ForgotComponent},{path:"student/:id",canActivate:[AuthGuard], component:StudentComponent,children:[{path:"",component:StudentHomeComponent},{path:"apply",component:ApplyComponent}]},{
  path:"moderator/:id",component:ModeratorHomeComponent
},{path:"admin/:id",component:AdminHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
