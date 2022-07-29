import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/app/Model/student.model';
import { StudentService } from 'src/app/student.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  courses = ["FSD", "Data Science", "AI & ML", "Software Testing"]
  batches = ["KKEM-FEB-2022", "ABCD-B1-MAR-2022", "ABCD-B2-MAR-2022", "KKEM-MAY-2022"]

  data: any = new RegistrationModel("", "", "", "", "", "", "")
  url="string"

  constructor(private _student: StudentService,private toaster:ToastrService) { }

  onFileSelected(event:any){
    
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e:any)=>{
        this.url=e.target.result;
        console.log("error image",this.url);
        
      }
      this.data.image=event.target.files[0];
      console.log("error image");
    }
    
  }
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