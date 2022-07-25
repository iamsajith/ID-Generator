import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeratorService } from 'src/app/moderator.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  id=""

  constructor(private moderator:ModeratorService,private _actiroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._actiroute.snapshot.params['id'];
    localStorage.setItem("id",this.id)
    this.moderator.studentData(this.id).subscribe((data)=>{
      let newData = JSON.parse(JSON.stringify(data))
      this.moderator.studentData(newData).subscribe((data)=>{
        console.log(data)
      })
    })

  }

}
