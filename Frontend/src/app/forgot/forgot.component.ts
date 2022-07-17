import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  roles=["Student","Batch Manager","Admin"]
  data={
    email : '',
    role:""
  }
 

  constructor(
    private _actiroute: ActivatedRoute,
    private forgot: AuthService,
    private _route:Router
  ) {}

  ngOnInit(): void {}
  Change() {
    if(this.data.role === "Student"){
      this.forgot.studentforgot(this.data).subscribe()
      this._route.navigate(["/"])
    }
    else if(this.data.role === "Batch Manager"){
      this.forgot.moderatorforgot(this.data).subscribe()
      this._route.navigate(["/"])
    }
    else if(this.data.role === "Admin"){
      this.forgot.adminforgot(this.data).subscribe(()=>{
        this._route.navigate(["/"])
      })

    }
  }
}
