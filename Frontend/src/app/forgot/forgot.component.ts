import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  roles = ["Student", "Batch Manager", "Admin"]
  ngSelect = this.roles[0]
  data = {
    email: '',
    role: "",
    pin: ""
  }


  constructor(
    private _actiroute: ActivatedRoute,
    private forgot: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    AOS.init();
   }
  getpin() {
    if (this.data.role === "Student") {
      this.forgot.studentforgot(this.data).subscribe()
    }
    else if (this.data.role === "Batch Manager") {
      this.forgot.moderatorforgot(this.data).subscribe()
    }
    else if (this.data.role === "Admin") {
      this.forgot.adminforgot(this.data).subscribe(() => {

      })

    }
  }

  Change() {
    if (this.data.role === "Student") {
      this.forgot.studentnewpassword(this.data).subscribe(() => {
        this._route.navigate(['/'])
      })
    }
    else if (this.data.role === "Batch Manager") {
      this.forgot.moderatornewpassword(this.data).subscribe(() => {
        this._route.navigate(['/'])
      })
    }
    else if (this.data.role === "Admin" ) {
      this.forgot.adminnewpassword(this.data).subscribe(() => {
        this._route.navigate(['/'])
      })


    }


  }
}

