import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-batch-manager',
  templateUrl: './batch-manager.component.html',
  styleUrls: ['./batch-manager.component.css']
})
export class BatchManagerComponent implements OnInit {
  id=""
  newData:any
  moderatorData:any

  constructor(private _actiroute:ActivatedRoute,private admin:AdminService ) { }

  ngOnInit(): void {

    this.id = this._actiroute.snapshot.params['id'];
    this.admin.fetchModerator(this.id).subscribe((data) => {
      this.newData = JSON.parse(JSON.stringify(data))
      console.log(this.newData)
      this.admin.fetchModerator(this.newData).subscribe((moddata) => {
        console.log(moddata)
        this.moderatorData = JSON.parse(JSON.stringify(moddata))
      })
    })
    
  }
  update(id:any){
    localStorage.setItem("BM-ID",id)
  }

  delete(id:any){
    console.log(id)
    this.admin.deleteMod(id).subscribe(()=>{
      console.log("DELETED")
    })
    window.location.reload()

  }


}
