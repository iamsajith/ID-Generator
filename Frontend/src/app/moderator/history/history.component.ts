import { Component, OnInit } from '@angular/core';
import { ModeratorService } from 'src/app/moderator.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  // id = ""
  newData: any =[]
  studentData: any

  constructor(private moderator:ModeratorService) { }

  ngOnInit(): void {
    
    this.moderator.studentData(localStorage.getItem("id")).subscribe((data) => {
      this.newData = JSON.parse(JSON.stringify(data))
      console.log(this.newData)
      this.moderator.studentHistory(this.newData).subscribe((studata) => {
        console.log(studata)
        this.studentData = JSON.parse(JSON.stringify(studata))
  })

})
    }
  }