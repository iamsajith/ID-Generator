import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/app/Model/student.model';
import { StudentService } from 'src/app/student.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  courses = ["FSD", "Data Science", "AI & ML", "Software Testing"]
  batches = ["KKEM-FEB-2022", "ABCD-B1-MAR-2022", "ABCD-B2-MAR-2022", "KKEM-MAY-2022"]

  data: any = new RegistrationModel("", "", "", "", "", "", "")

  myimage: Observable<any>;

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }


  constructor(private _student: StudentService,private toaster:ToastrService) { }

  ngOnInit(): void {
    AOS.init();
  }


  Register() {
    this._student.studentRegister(this.data).subscribe((data) => {
      if(data != null){
        this.toaster.success("Your application is submitted","Success")
      }
      else{
this.toaster.error("Error while submitting","Error")
      }
    })
  }



}