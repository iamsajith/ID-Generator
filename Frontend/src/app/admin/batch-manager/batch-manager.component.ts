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
  // displayStyle = "none";
  moderatorData:any=[]
  viewData:any

  constructor(private _actiroute:ActivatedRoute,private admin:AdminService ) { }
  

  ngOnInit(): void {

    this.id = this._actiroute.snapshot.params['id'];
    console.log("eyeD",this.id)
    this.admin.fetchModerator(this.id).subscribe((moddata) => {
      this.moderatorData = JSON.parse(JSON.stringify(moddata))
      console.log(this.moderatorData[1].name)
      // console.log(this.newData)
      // this.admin.fetchModerator(this.newData).subscribe((moddata) => {
      //   console.log(moddata)
      //   
      // })
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
  view(id:any){
    // this.displayStyle = "block";
    this.admin.viewpopup(id).subscribe((data)=>{
      console.log(data)
      this.viewData = JSON.parse(JSON.stringify(data))
    })

  }
  closeview(){
    // this.displayStyle = "none";
  }


}
