import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { ModeratorModel } from 'src/app/Model/moderator.model';
import { StudentService } from 'src/app/student.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-newmanager',
  templateUrl: './newmanager.component.html',
  styleUrls: ['./newmanager.component.css']
})
export class NewmanagerComponent implements OnInit {
  data:any= new ModeratorModel("","","","","") 
  designations=["Manager","Assistant Manager","Course Manager"]
  array:any
  courses:any


  constructor(private admin:AdminService,private router:Router,private _student:StudentService) {}

  ngOnInit(): void {
    AOS.init();
    this.admin.updatefetch(localStorage.getItem("BM-ID")).subscribe((data)=>{
      this.data = JSON.parse(JSON.stringify(data))
    });
    this._student.getCourses().subscribe((data)=>{
      this.array = JSON.parse(JSON.stringify(data))
      this.courses = this.array[0].course
      })
  }
  Update(){
    this.admin.update(this.data).subscribe((data)=>{
      console.log("Success")
      let url = localStorage.getItem('url')
      this.router.navigate([`${url}`])


    })
  }

}
