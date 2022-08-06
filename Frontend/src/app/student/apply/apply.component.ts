import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/app/Model/student.model';
import { StudentService } from 'src/app/student.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  url: any = ""
  array:any
  courses:any
  batches:any

  data: any = new RegistrationModel("", "", "", "", "", "")




  constructor(private _student: StudentService, private toaster: ToastrService,private _router:Router) { }

  ngOnInit(): void {
    AOS.init();
    this._student.getCourses().subscribe((data)=>{
      this.array = JSON.parse(JSON.stringify(data))
      this.courses = this.array[0].course
      this.batches = this.array[0].batch
      console.log(this.batches[0])
    })

  }
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return
    }
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return
    }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result
      console.log(this.url)
    }
  }


  Register() {
    this._student.studentRegister({ data: this.data, url: this.url }).subscribe((data) => {
      if(data != null) {
        this.toaster.success("Your application is submitted", "Success")
      }
      else {
        this.toaster.error("Error")
      }
    })
    this._router.navigate([`/${localStorage.getItem("url")}`])
  }





}