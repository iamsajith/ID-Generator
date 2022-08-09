import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeratorService } from 'src/app/moderator.service';

import * as AOS from 'aos';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  key : string = 'id';
  reverse : boolean = false;
  name:string=""
  p : number = 1;
  id = ""
  newData: any =[]
  studentData: any

  constructor(private moderator: ModeratorService, private _actiroute: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init();
    this.id = this._actiroute.snapshot.params['id'];
    localStorage.setItem("id", this.id)
    this.moderator.studentData(this.id).subscribe((data) => {
      this.newData = JSON.parse(JSON.stringify(data))
      console.log(this.newData)
      this.moderator.fetchStudent(this.newData).subscribe((studata) => {
        console.log(studata)
        this.studentData = JSON.parse(JSON.stringify(studata))
      })
    })

  }

  accept(id:any) {
    this.moderator.accept(id).subscribe((data) => {
      console.log("Accepted")
      window.location.reload()
    })
  }

  reject(id: any) {
    this.moderator.reject(id).subscribe(() => {
      console.log("Rejected")
      window.location.reload()
  })
}

  sort(key: any){

    this.key = key;
    this.reverse = !this.reverse;
  }

}
