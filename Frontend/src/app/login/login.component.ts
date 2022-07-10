import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {
    email: "",
    password: ""
  }


  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {

  }
  Verify = () => {
    const x: string = this.User.password.slice(3, 6).toLowerCase()
    if (x === "stu") {
      this._auth.studentcheck(this.User).subscribe((data) => {
        this._router.navigate(['/student'])

      }
      )
    }
    else if (x === "mod") {
      this._auth.moderatorcheck(this.User).subscribe((data) => {
        console.log(data)
        this._router.navigate(['/moderator'])

      }
      )
    }
    else if (x === "adm") {
      this._auth.admincheck(this.User).subscribe((data) => {
        console.log(data)
        this._router.navigate(['/admin'])

      }
      )
    }
    else {
      this._auth.studentcheck(this.User).subscribe((data) => {
        console.log(data)
        this._router.navigate(['/'])

      }
      )
    }

  }

}
