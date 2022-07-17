import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
 courses = ["FSD","Data Science", "AI & ML","Software Testing"]
 batches = ["KKEM-FEB-2022","ABCD-B1-MAR-2022","ABCD-B2-MAR-2022","KKEM-MAY-2022"]

  data:any = {
    name:"",
    email:"",
    phone:"+91",
    image:"",
    course:"",
    batch:"",
    startDate:"",
    endDate:"",
  }
 

  constructor() { }

  ngOnInit(): void {
  }
  Register(){}
  
  

}
