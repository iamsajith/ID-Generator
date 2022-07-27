import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { HeaderComponent } from './student/header/header.component';
import { ApplyComponent } from './student/apply/apply.component';
import { StudentComponent } from './student/student/student.component';
import { ForgotComponent } from './forgot/forgot.component';
import { StatusComponent } from './student/status/status.component';
import { HeaderModComponent } from './moderator/header-mod/header-mod.component';
import { HeaderHistoryComponent } from './moderator/header-history/header-history.component';
import { HeaderApplicationsComponent } from './moderator/header-applications/header-applications.component';
import { ApplicationsComponent } from './moderator/applications/applications.component';
import { HistoryComponent } from './moderator/history/history.component';
import { HeaderBatchComponent } from './admin/header-batch/header-batch.component';
import { HeaderControlsComponent } from './admin/header-controls/header-controls.component';
import { BatchComponent } from './admin/batch/batch.component';
import { ControlsComponent } from './admin/controls/controls.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { NewBatchComponent } from './admin/new-batch/new-batch.component';
import { AdminService } from './admin.service';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    ModeratorHomeComponent,
    StudentHomeComponent,
    HeaderComponent,
    ApplyComponent,
    StudentComponent,
    ForgotComponent,
    StatusComponent,
    HeaderModComponent,
    HeaderHistoryComponent,
    HeaderApplicationsComponent,
    ApplicationsComponent,
    HistoryComponent,
    HeaderBatchComponent,
    HeaderControlsComponent,
    BatchComponent,
    ControlsComponent,
    HeaderAdminComponent,
    NewBatchComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
  

    
  ],
  providers: [AdminService],
  bootstrap: [AppComponent],
  entryComponents:[NewBatchComponent]
})
export class AppModule { }
